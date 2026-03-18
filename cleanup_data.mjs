import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'dummy_data.json');

if (fs.existsSync(DATA_FILE)) {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const cleaned = data.map(p => {
        if (p.description) {
            // Remove the specific Blogspot artifacts
            p.description = p.description
                .replace(/^id='post-body-[^']+?' itemprop='[^']+?'>\s*/i, '')
                .replace(/&amp;/g, '&')
                .replace(/&nbsp;/g, ' ')
                .trim();
        }
        return p;
    });
    fs.writeFileSync(DATA_FILE, JSON.stringify(cleaned, null, 2));
    console.log('Cleaned up dummy_data.json');
}
