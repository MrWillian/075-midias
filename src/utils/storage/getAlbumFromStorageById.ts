import { collection, getDocs, query } from "firebase/firestore";
import { database } from "../../firebase";

type AlbumProps = {
    name: string;
    description: string;
}

const getAlbumFromStorageById = async (id: string | undefined) => {
    const querySnapshot = await getDocs(query(collection(database, "albuns")));
    let albumData: AlbumProps = { name: '', description: '' };
    querySnapshot.forEach((doc) => {
        if (doc.id == id) {
            albumData = {
                name: doc.data().name,
                description: doc.data().description
            }
        }
    });
    return albumData;
}

export default getAlbumFromStorageById;
