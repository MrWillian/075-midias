import React, { useState } from 'react';
import { dataSlider } from './dataSlider';
import * as C from './style';
import { MdEast, MdWest } from 'react-icons/md';
import SliderButton from '../SliderButton';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    }

    return (
        <C.Container>
            {dataSlider.map((obj, index) => {
                return (
                    <C.Slider 
                        key={obj.id}
                        isActive={obj.id === index + 1}
                    >
                        <C.Image src={process.env.PUBLIC_URL + `images/img${slideIndex}.jpg`} />
                    </C.Slider>
                );
            })}
            <SliderButton 
                moveSlide={nextSlide}
                style={{ right: '0' }}>
                <MdEast color="#C75104" style={{ width: '30', height: '30' }} />
            </SliderButton>
            <SliderButton 
                moveSlide={prevSlide}
                style={{ left: '0' }}>
                <MdWest color="#C75104" style={{ width: '30', height: '30' }} />
            </SliderButton>
        </C.Container>
    );
}

export default Slider;