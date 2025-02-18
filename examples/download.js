import Indices from '../index-downloader.js';

const indices = new Indices();

indices.download('vosk-model-small-tg-0.22', 'vosk-model-small-tg-0.22.zip').then(result => {
    if (result.success) {
        console.log(result.message);
    } else {
        console.error(result.message);
    }
});