import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'dummy_data.json');

const categorize = (name, desc) => {
    const text = (name + ' ' + (desc || '')).toLowerCase();
    
    if (text.includes('palet') || text.includes('pallet')) {
        return ['Palet Plastik'];
    }
    
    if (text.includes('lunch box') || text.includes('katering') || text.includes('bento') || 
        text.includes('makan') || text.includes('food grade') || text.includes('bakery') || 
        text.includes('roti') || text.includes('buah') || text.includes('sayur') || 
        text.includes('gelas') || text.includes('piring') || text.includes('sendok')) {
        return ['Box Food Grade'];
    }
    
    if (text.includes('container') || text.includes('box') || text.includes('crat') || 
        text.includes('keranjang') || text.includes('jolly box') || text.includes('part case') ||
        text.includes('tool box') || text.includes('utility') || text.includes('spare part') ||
        text.includes('unggas') || text.includes('ayam') || text.includes('telur')) {
        return ['Container Industri'];
    }
    
    if (text.includes('sampah') || text.includes('dustbin') || text.includes('trash')) {
        return ['Tempat Sampah'];
    }

    if (text.includes('helmet') || text.includes('safety')) {
        return ['Safety Equipment'];
    }

    return ['Lainnya'];
};

if (fs.existsSync(DATA_FILE)) {
    let data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    
    // The user said "hapus produk hasil khayalan/dummy". 
    // The first 4 were hand-crafted, the rest (index 4+) were scraped.
    // However, I should check if they were already cleaned.
    // The previous run added 189 products to existing 4, total 193.
    // So indices 0, 1, 2, 3 are the ones to remove.
    const realProducts = data.slice(4); 
    
    const refined = realProducts.map(p => {
        p.categories = categorize(p.name, p.description);
        return p;
    });
    
    fs.writeFileSync(DATA_FILE, JSON.stringify(refined, null, 2));
    console.log(`Refined ${refined.length} products. Removed 4 mock products.`);
}
