import React from 'react';

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
