import React from 'react';
import { HeroContainer, HeroBackGround, VideoBg } from './HeroStyled';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBackGround>
                <VideoBg
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                ></VideoBg>
            </HeroBackGround>
        </HeroContainer>
    );
};

export default Hero;
