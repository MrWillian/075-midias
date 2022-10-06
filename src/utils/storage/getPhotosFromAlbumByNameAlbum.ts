import { listAll, ref } from "firebase/storage";
import { ImageFileType } from "../../components/Slider";
import { storage } from "../../firebase";
import sanitizeFilesToImageFile from "../sanitizeFilesToImageFile";

const getPhotosFromAlbumByNameAlbum = async (id: string | undefined, albumName: string) => {
    let storedFiles: ImageFileType[] = [];
    await listAll(ref(storage, `albuns/${albumName}/`)).then((result) => {
        storedFiles = sanitizeFilesToImageFile(id, albumName, result.items);
    }).catch(err => console.log(err));
    
    return storedFiles;
}

export default getPhotosFromAlbumByNameAlbum;
