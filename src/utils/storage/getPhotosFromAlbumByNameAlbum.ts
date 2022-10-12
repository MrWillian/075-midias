import { listAll, ref } from "firebase/storage";
import { ImageFileType } from "../../components/Slider";
import { storage } from "../../firebase";
import sanitizeFilesToImageFile from "../sanitizeFilesToImageFile";

const getPhotosFromAlbumByNameAlbum = async (id: string | undefined, albumName: string) => {
    let storedFiles: any[] = [];
    let sanitizedFiles: ImageFileType[] = [];
    if (albumName !== "") {
        await listAll(ref(storage, `albuns/${albumName}/`)).then((result) => {
            result.items.forEach((item) => {
                storedFiles.push(item);
            });
        }).catch(err => console.log(err));
        sanitizedFiles = sanitizeFilesToImageFile(id, albumName, storedFiles);
    }
    return sanitizedFiles;
}

export default getPhotosFromAlbumByNameAlbum;
