'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Controller } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { HTMLProps, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';


interface Props extends HTMLProps<HTMLDivElement> {
    instructorGallery:  StaticImageData[];
    uniqueValueForSliderClass: Number;
}

export const InstructorCardGallery: React.FC<Props> = ({instructorGallery, uniqueValueForSliderClass, ...props}) => {

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    

    return (
        <div className={`relative mx-auto flex items-center justify-center ${props.className}`}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-custom' + uniqueValueForSliderClass,
                    prevEl: '.swiper-button-prev-custom' + uniqueValueForSliderClass,
                }}
                centeredSlides={true}
                modules={[Navigation]}
                className="w-full overflow-y-auto h-96"
                zoom={true}
            >
                {
                    instructorGallery.map(img => 
                        <SwiperSlide className='my-auto ' key={img.src}><Image src={img} className='object-cover w-full h-full block rounded-lg pointer-events-none' alt='' /></SwiperSlide>
                    )
                }
            </Swiper>
            <div className={`swiper-button-prev-custom${uniqueValueForSliderClass} absolute z-10 left-2 w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-inset ring-[#24A746] shadow-[0_0_15px_2px_rgba(36,167,70,1)] hover:shadow-[0_0_15px_4px_rgba(36,167,70,1)] bg-gradient-to-r from-[#24A746] to-[#27C300]`}>
                <svg width="80%" height="auto" viewBox="0 0 52 26" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 12.8303H2H50ZM2 12.8303L14 1.83032L2 12.8303ZM2 12.8303L14 23.8303L2 12.8303Z"/>
                    <path d="M50 12.8303H2M2 12.8303L14 1.83032M2 12.8303L14 23.8303" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={`swiper-button-next-custom${uniqueValueForSliderClass} absolute z-10 right-2 w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-inset ring-[#24A746] shadow-[0_0_15px_2px_rgba(36,167,70,1)] hover:shadow-[0_0_15px_4px_rgba(36,167,70,1)] bg-gradient-to-r from-[#24A746] to-[#27C300]`}>
                <svg width="80%" height="auto" viewBox="0 0 52 26" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12.8303H50H2ZM50 12.8303L38 1.83032L50 12.8303ZM50 12.8303L38 23.8303L50 12.8303Z" />
                    <path d="M2 12.8303H50M50 12.8303L38 1.83032M50 12.8303L38 23.8303" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
}