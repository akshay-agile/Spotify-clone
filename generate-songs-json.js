const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'songs');

const folders = fs.readdirSync(basePath).filter(f => fs.statSync(path.join(basePath, f)).isDirectory());

folders.forEach(folder => {
    const folderPath = path.join(basePath, folder);
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.mp3'));

    const songsJson = {
        songs: files
    };

    fs.writeFileSync(path.join(folderPath, 'songs.json'), JSON.stringify(songsJson, null, 4));
});

console.log('✅ songs.json generated for all folders!');
