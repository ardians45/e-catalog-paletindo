import fs from 'fs';
import path from 'path';
import https from 'https';

const YEARS = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'products');
const DATA_FILE = path.join(process.cwd(), 'dummy_data.json');

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(filename);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function scrape() {
  const allPostUrls = new Set();
  
  for (const year of YEARS) {
    const url = `https://www.paletindo.com/${year}/`;
    console.log(`Fetching main page for ${year}: ${url}`);
    try {
        const html = await fetchHtml(url);
        // Updated regex to handle different years
        const postUrlRegex = new RegExp(`href='(https:\\/\\/www\\.paletindo\\.com\\/${year}\\/[^']+\\.html)'`, 'g');
        let match;
        while ((match = postUrlRegex.exec(html)) !== null) {
          allPostUrls.add(match[1]);
        }
    } catch (e) {
        console.error(`Error fetching index for ${year}:`, e.message);
    }
  }
  
  console.log(`Found ${allPostUrls.size} total product URLs. Parsing all...`);
  
  const products = [];
  let existingData = [];
  if (fs.existsSync(DATA_FILE)) {
      existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      existingData = existingData.slice(0, 4); // Keep only hand-crafted ones
  }

  for (const url of allPostUrls) {
    console.log(`Parsing ${url}...`);
    try {
        const postHtml = await fetchHtml(url);
        
        const titleMatch = /<h3 class='post-title entry-title' itemprop='name'>\s*(.*?)\s*<\/h3>/s.exec(postHtml);
        const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Unknown Product';
        
        const bodyMatch = /<div class='post-body entry-content'(.*?)<div style='clear: both;'>/s.exec(postHtml);
        let imageUrl = '';
        let imageFilename = '';
        if (bodyMatch) {
            const bodyHtml = bodyMatch[1];
            const imgRegex = /<a href="([^"]+\.(?:jpg|jpeg|png|gif))"/gi;
            let imgMatch;
            while ((imgMatch = imgRegex.exec(bodyHtml)) !== null) {
                if (!imgMatch[1].includes('Blanck+Image') && !imgMatch[1].includes('Untitled.png')) {
                    imageUrl = imgMatch[1];
                    break;
                }
            }
            if(!imageUrl) {
               const srcRegex = /<img[^>]+src="([^"]+\.(?:jpg|jpeg|png|gif))"/gi;
               let srcMatch;
               while ((srcMatch = srcRegex.exec(bodyHtml)) !== null) {
                   if (!srcMatch[1].includes('Blanck+Image') && !srcMatch[1].includes('Untitled.png')) {
                       imageUrl = srcMatch[1];
                       break;
                   }
               }
            }
        }
        
        if (imageUrl) {
            imageUrl = imageUrl.replace(/^http:/, 'https:');
            imageFilename = path.basename(imageUrl);
            const localImagePath = path.join(IMAGES_DIR, imageFilename);
            if (!fs.existsSync(localImagePath)) {
                console.log(`Downloading image: ${imageUrl}`);
                await downloadImage(imageUrl, localImagePath).catch(console.error);
            }
        }
        
        let textContent = '';
        if (bodyMatch) {
            textContent = bodyMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        }
        
        const dimMatch = /(\d+(?:\.\d+)?)\s*[Xx]\s*(\d+(?:\.\d+)?)\s*[Xx]\s*(\d+(?:\.\d+)?)/.exec(title + ' ' + textContent);
        
        let length = 0, width = 0, height = 0;
        if(dimMatch) {
            length = parseFloat(dimMatch[1]);
            width = parseFloat(dimMatch[2]);
            height = parseFloat(dimMatch[3]);
        }

        products.push({
            name: title,
            description: textContent.substring(0, 250) + (textContent.length > 250 ? '...' : ''),
            material: "Plastik PP/HDPE",
            weight: 0,
            color: "Sesuai Gambar",
            is_featured: false,
            dimensions: {
                length_outer: length,
                width_outer: width,
                height_outer: height
            },
            applications: ["Industri", "Pergudangan", "Distribusi"],
            categories: ["Container Industri"],
            image: imageFilename ? `/images/products/${imageFilename}` : null
        });
        
    } catch (e) {
        console.error(`Error parsing ${url}: `, e.message);
    }
  }

  const allProducts = [...existingData, ...products];
  fs.writeFileSync(DATA_FILE, JSON.stringify(allProducts, null, 2));
  console.log(`Total products: ${allProducts.length}. Added ${products.length} from legacy site.`);
}

scrape().catch(console.error);
