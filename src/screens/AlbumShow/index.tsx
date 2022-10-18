import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { database, storage } from '../../firebase';
import { useParams } from "react-router-dom";
import Navbar from '../../components/Navbar';
import { AlbumType, ImageType } from '../../@types/album';
import * as C from './style';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const AlbumShow = () => {
    const [album, setAlbum] = useState<AlbumType>({});
    const { id } = useParams();

    useEffect(() => {
        const getAlbumById = async () => {
            if (id !== undefined) {
                const albumTemp = await handleGetAlbumById();
                await sleep(1500);
                setAlbum(albumTemp);
            }
        }
        getAlbumById().catch(error => console.log(error));
    }, []);

    const handleGetAlbumById = async () => {
        let albumTemp: AlbumType = {};
        const querySnapshot = await getDocs(query(collection(database, "albuns")));
        querySnapshot.forEach(async (doc) => {
            if (doc.id === id) {
                albumTemp.name = doc.data().name;
                albumTemp.description = doc.data().description;
                albumTemp.date = doc.data().date.toDate().toLocaleDateString("pt-BR");
                albumTemp.images = await getPhotosByNameAlbum(albumTemp.name);
            }
        });
        return albumTemp;
    }

    const getPhotosByNameAlbum = async (albumName: string | undefined) => {
        let images: ImageType = { src: [] };
        await listAll(ref(storage, `albuns/${albumName}`)).then((result) => {
            result.items.forEach(async (item) => images.src.push(await getDownloadURL(item).then(url => url)));
        }).catch(error => console.log(error));
        return images;
    }

    return (
        <>
            <Navbar />
            <C.Container>
                <C.HeaderContainer>
                    {album.name ? <C.Title>{album.name}</C.Title> : <></>}
                    {album.description ? <C.Description>{album.description}</C.Description> : <></>}
                    {album.date ? <C.Date>{album.date}</C.Date> : <></>}
                </C.HeaderContainer>
                <C.ImagesContainer>
                    {album.images 
                        ? album.images?.src.map((image, index) => <C.Image key={index} src={image} />)
                        : <></>
                    }
                </C.ImagesContainer>
            </C.Container>
        </>
    );
}

export default AlbumShow;
