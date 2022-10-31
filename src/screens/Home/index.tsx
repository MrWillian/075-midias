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
import { sleep, shuffle } from '../../utils';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components';
import { MdRemoveRedEye } from "react-icons/md";

type Photos = {
    id: string;
    album: string;
    src: string;
    width: number;
    height: number;
}

const shadowStyles = {
    webkitBoxShadow: '7px 7px 8px -3px rgba(0,0,0,0.72)',
    mozBoxShadow: '7px 7px 8px -3px rgba(0,0,0,0.72)',
    boxShadow: '7px 7px 8px -3px rgba(0,0,0,0.72)'
}

const Home = () => {
    const [photos, setPhotos] = useState<Photos[]>([]);
    const [photosToShow, setPhotosToShow] = useState<Photos[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadingContent = async () => {
            getAlbunsFromFirestore();
            await sleep(3000);
        }
        trackPromise(loadingContent().catch(error => console.log(error)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        selectPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photos]);

    const getAlbunsFromFirestore = () => {
        getDocs(collection(database, "albuns")).then((results) => {
            results.forEach(async (doc) => {
                await getPhotos(doc.id, doc.data().name);
            });
        });
    }

    const getPhotos = async (albumId: string, albumName: string) => {
        listAll(ref(storage, `albuns/${albumName}`)).then((results) => {
            results.items.forEach((item) => getDownloadURL(item).then((url) =>
                setPhotos((prev) => [...prev, { album: albumName, id: albumId, width: 255, height: 265, src: url }])
            ));
        }).catch(error => console.log(error));
    }

    const selectPhotos = () => {
        if (photos.length > 10) {
            const photosWithoutDemoAlbum = photos.filter(photos => photos.album !== 'Álbum de Demonstração');
            setPhotosToShow(shuffle(photosWithoutDemoAlbum).slice(0, 10));
        } else {
            setPhotosToShow(shuffle(photos).slice(0, 10));
        }
    }

    const showAlbum = (id: string) => navigate(`/show-album/${id}`);

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
                                    <C.Image 
                                        style={shadowStyles} 
                                        src={photo.src} 
                                        width={photo.width} 
                                        height={photo.height}
                                    />
                                    <C.Caption>
                                        <Button
                                            style={shadowStyles}
                                            color="#C75104"
                                            onClick={() => showAlbum(photo.id)} 
                                            Icon={MdRemoveRedEye}
                                            iconSize={24}
                                        />
                                    </C.Caption>
                                </C.FigureImage>
                            )}
                        </C.Row>
                        <C.Row>
                            {photosToShow.slice(5, 10).map((photo, index) =>
                                <C.FigureImage key={index}>
                                    <C.Image 
                                        style={shadowStyles} 
                                        src={photo.src} 
                                        width={photo.width} 
                                        height={photo.height}
                                    />
                                    <C.Caption>
                                        <Button 
                                            style={shadowStyles}
                                            color="#C75104"
                                            onClick={() => showAlbum(photo.id)} 
                                            Icon={MdRemoveRedEye}
                                            iconSize={24}
                                        />
                                    </C.Caption>
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
