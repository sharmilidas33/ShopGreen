import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../components/images/Banner1.webp';
import Banner2 from '../components/images/Banner2.jpg';
import Banner3 from '../components/images/Banner3.webp';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <Image src={Banner1} alt='Banner1Img' />
                </div>
                <div>
                    <Image src={Banner2} alt='Banner1Img' />
                </div>
                <div>
                    <Image src={Banner3} alt='Banner1Img' />
                </div>
            </Carousel>
            <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
        </div>
    )
}

export default Banner
