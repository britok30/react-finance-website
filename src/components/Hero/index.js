import React from 'react';
import {
    HeroContainer,
    HeroBackGround,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    Button,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroStyled';
import Video from '../../videos/video.mp4';

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
            <HeroContent>
                <HeroH1>Investing for Everyone</HeroH1>
                <HeroP>
                    RobinStox, a pioneer of commission-free investing, gives you
                    more ways to make your money work harder.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
