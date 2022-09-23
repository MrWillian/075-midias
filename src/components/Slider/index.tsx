import React, { useEffect, useState } from 'react';
import * as C from './style';
import { MdEast, MdWest } from 'react-icons/md';
import SliderButton from '../SliderButton';

export type ImageFileType = {
    id: number;
    name?: string;
    file: Blob;
    src: string;
}

type ImagesFileType = {
    images: ImageFileType[];
}

const Slider = ({images}: ImagesFileType) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const prevSlide = () => slideIndex > 0 ? setSlideIndex((prev) => prev - 1) : 0;
    
    const nextSlide = () => slideIndex < images.length - 1 ? setSlideIndex((prev) => prev + 1) : 0;

    const getSrcFromImage = () => images[slideIndex] ? images[slideIndex].src : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

    return (
        <C.Container>
            <C.Slider key={images[slideIndex]?.id ? images[slideIndex]?.id : 0}>
                <C.Image 
                    src={getSrcFromImage()} 
                    alt={images[slideIndex]?.id + 1 > 0 ? `Foto do Evento ${images[slideIndex]?.id + 1}` : ''}
                />
            </C.Slider>
            <SliderButton moveSlide={prevSlide} style={{ left: '0' }}>
                <MdWest color="#C75104" style={{ width: '20', height: '20' }} />
            </SliderButton>
            
            <SliderButton moveSlide={nextSlide} style={{ right: '0' }}>
                <MdEast color="#C75104" style={{ width: '20', height: '20' }} />
            </SliderButton>
        </C.Container>
    );
}

export default Slider;