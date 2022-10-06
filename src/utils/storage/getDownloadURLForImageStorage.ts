import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const getDownloadURLForImageStorage = async (albumName: string, imageName: string) => {
    let downloadedUrl: any;
    await getDownloadURL(ref(storage, `/albuns/${albumName}/${imageName}`)).then((url) => {
        downloadedUrl = url;
    });
    return downloadedUrl;
}

export default getDownloadURLForImageStorage;
