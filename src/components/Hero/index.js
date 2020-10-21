import React, { useState } from 'react';
import {
    HeroContainer,
    HeroBackGround,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroStyled';
import Img from '../../images/ishant-mishra-osWDvhPlGLU-unsplash.jpg';
import { Button } from '../ButtonStyled';

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBackGround>
                <ImgBg src={Img}></ImgBg>
            </HeroBackGround>
            <HeroContent>
                <HeroH1>Investing for Everyone</HeroH1>
                <HeroP>
                    RobinX, a pioneer of commission-free investing, gives you
                    more ways to make your money work harder.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
