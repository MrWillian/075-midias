import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import PhotoAlbum from 'react-photo-album';
import ContactSection from '../../components/ContactSection';
import EventsSection from '../../components/EventsSection';
import Navbar from '../../components/Navbar';
import { database, storage } from '../../firebase';
import * as C from './style';

type Photos = {
    src: string;
    width: number;
    height: number;
}

const Home = () => {
    const [photos, setPhotos] = useState<Photos[]>([]);
    const [photosToShow, setPhotosToShow] = useState<Photos[]>([]);

    useEffect(() => {
        getAlbunsFromFirestore();
    }, []);

    useEffect(() => {
        selectPhotos();
    }, [photos]);

    const getAlbunsFromFirestore = () => {
        let albunsName: string[] = [];
        getDocs(collection(database, "albuns")).then((results) => {
            results.forEach(async (doc) => {
                albunsName.push(doc.data().name);
                await getPhotos(doc.data().name);
            });
        });
    }

    const getPhotos = async (albumName: string) => {
        listAll(ref(storage, `albuns/${albumName}`)).then((results) => {
            results.items.forEach((item) => getDownloadURL(item).then((url) => 
                setPhotos((prev) => [...prev, { width: 100, height: 100, src: url }])
            ));
        }).catch(error => console.log(error));
    }

    const selectPhotos = () => setPhotosToShow(photos.slice(0, 10));

    return (
        <>
            <Navbar />
            <C.Container>
                <PhotoAlbum layout="columns" photos={photosToShow} />
            </C.Container>
            <EventsSection />
            <ContactSection />
        </>
    );
}

export default Home;
