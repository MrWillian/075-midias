import React from 'react';
import * as C from './style';
import { FiArrowUpRight } from 'react-icons/fi';

const EventsSection = () => {
    return (
        <C.Container id="events">
            <C.TextContainer>
                <C.Title>Eventos</C.Title>
                <C.Line />
                <C.Content>
                    Tenha cobertura total dos seus eventos, garantindo que nenhum momento passará sem ser registrado pelo click de nossas câmeras...
                </C.Content>
                <C.ContactLink href="http://contate.me/075-midias" target="_blank">
                    Entre em contato conosco 
                    <FiArrowUpRight />
                </C.ContactLink>
            </C.TextContainer>
            <C.ImageContainer>
                <C.Image src={process.env.PUBLIC_URL + `images/img1.jpg`} />
            </C.ImageContainer>
        </C.Container>
    );
}

export default EventsSection;