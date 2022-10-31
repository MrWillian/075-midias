import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import ContactSection from '../../components/ContactSection';
import EventsSection from '../../components/EventsSection';
import Navbar from '../../components/Navbar';
import { database, storage } from '../../firebase';
import LoadingIndicator from '../../components/LoadingIndicator';
import { trackPromise } from 'react-promise-tracker';
import * as C from './style';
import { sleep } from '../../utils';

type Photos = {
    src: string;
    width: number;
    height: number;
}

const Home = () => {
    const [photos, setPhotos] = useState<Photos[]>([]);
    const [photosToShow, setPhotosToShow] = useState<Photos[]>([]);

    useEffect(() => {
        const loadingContent = async () => {
            getAlbunsFromFirestore();
            await sleep(2000);
        }
        trackPromise(loadingContent().catch(error => console.log(error)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        selectPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                setPhotos((prev) => [...prev, { width: 255, height: 265, src: url }])
            ));
        }).catch(error => console.log(error));
    }

    const selectPhotos = () => setPhotosToShow(photos.slice(0, 10));

    return (
        <>
            <Navbar />
            <C.Container>
                <LoadingIndicator />
                {photosToShow ? (
                    <>
                        <C.Row>
                            {photosToShow.slice(0, 5).map((photo, index) =>
                                <C.FigureImage key={index}>
                                    <C.Image src={photo.src} width={photo.width} height={photo.height} />
                                </C.FigureImage>
                            )}
                        </C.Row>
                        <C.Row>
                            {photosToShow.slice(5, 10).map((photo, index) =>
                                <C.FigureImage key={index}>
                                    <C.Image src={photo.src} width={photo.width} height={photo.height} />
                                </C.FigureImage>
                            )}
                        </C.Row>
                    </>
                ) : null}
            </C.Container>
            <EventsSection />
            <ContactSection />
        </>
    );
}

export default Home;
