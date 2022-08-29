import React from 'react';
import PhotoAlbum from 'react-photo-album';
import ContactSection from '../../components/ContactSection';
import EventsSection from '../../components/EventsSection';
import Navbar from '../../components/Navbar';
import * as C from './style';

const Home = () => {

    const photos = [
        {
            src: "https://picsum.photos/id/1011/250/150/",
            width: 800,
            height: 600
        },
        {
            src: "https://picsum.photos/id/1012/250/150/",
            width: 1600,
            height: 900
        },
        {
            src: "https://picsum.photos/id/1013/250/150/",
            width: 2000,
            height: 1800
        },
        {
            src: "https://picsum.photos/id/1014/250/150/",
            width: 1800,
            height: 1000
        },
        {
            src: "https://picsum.photos/id/1015/250/150/",
            width: 1700,
            height: 1500
        },
        {
            src: "https://picsum.photos/id/1016/250/150/",
            width: 1600,
            height: 1100
        },
        {
            src: "https://picsum.photos/id/1020/250/150/",
            width: 1000,
            height: 500
        },
        {
            src: "https://picsum.photos/id/1018/250/150/",
            width: 2000,
            height: 2000
        },
        {
            src: "https://picsum.photos/id/1019/250/150/",
            width: 2000,
            height: 1000
        }
    ];
    
    return (
        <>
            <Navbar />
            <C.Container>
                <PhotoAlbum layout="masonry" photos={photos} />
            </C.Container>
            <EventsSection />
            <ContactSection />
        </>
    );
}

export default Home;