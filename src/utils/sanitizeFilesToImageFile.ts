import { ImageFileType } from "../components/Slider";
import getDownloadURLForImageStorage from "./getDownloadURLForImageStorage";

const sanitizeFilesToImageFile = (id: string | undefined, albumName: string, files: any[]) => {
    let sanitizedFiles: any[] = [];
    files.map(async (chosenFile, index) => {
        let url = id === undefined
            ? URL.createObjectURL(chosenFile) 
            : await getDownloadURLForImageStorage(albumName, chosenFile.name).then(resultedUrl => resultedUrl);

        return sanitizedFiles.push({
            id: index,
            name: chosenFile.name,
            file: chosenFile,
            src: url,
        });
    });
    return (sanitizedFiles as unknown) as ImageFileType[];
}

export default sanitizeFilesToImageFile;
