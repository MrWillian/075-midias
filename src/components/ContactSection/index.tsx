import React from 'react';
import * as C from './style';

const ContactSection = () => {
    return (
        <C.Container>
            <C.TextContainer>
                <C.Title>Contatos</C.Title>
                <C.Line />
                <C.Content>(75) 8344-5256</C.Content>
                <C.Content>Segunda à sexta, das 8hrs às 12hrs e das 14hrs as 18hrs</C.Content>
                <C.Content>souzacasaes@gmail.com</C.Content>
                <C.SocialButtonsContainer>
                    <C.SocialButton href="http://contate.me/075-midias" target="_blank">
                        <C.WhatsAppIcon />
                    </C.SocialButton>
                    <C.SocialButton href="http://contate.me/075-midias" target="_blank">
                        <C.InstagramIcon />
                    </C.SocialButton>
                    <C.SocialButton>
                        <C.FacebookIcon />
                    </C.SocialButton>
                    <C.SocialButton>
                        <C.YoutubeIcon />
                    </C.SocialButton>
                </C.SocialButtonsContainer>
            </C.TextContainer>
        </C.Container>
    );
}

export default ContactSection;