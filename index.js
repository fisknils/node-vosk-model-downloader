import Indices from "./index-downloader";

export default {
    Indices,
    download: async (model, localPath) => {
        const indices = new Indices();
        return await indices.download(model, localPath);
    },
    list: async () => {
        const indices = new Indices();
        return await indices.list();
    }
}