'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

import galleryImg1 from '../../../../public/img/gallery/1.jpg';
import galleryImg2 from '../../../../public/img/gallery/2.jpg';
import galleryImg3 from '../../../../public/img/gallery/3.jpg';
import galleryImg4 from '../../../../public/img/gallery/4.jpg';
import galleryImg5 from '../../../../public/img/gallery/5.jpg';
import galleryImg6 from '../../../../public/img/gallery/6.jpg';
import galleryImg7 from '../../../../public/img/gallery/7.jpg';
import galleryImg8 from '../../../../public/img/gallery/8.jpg';
import galleryImg9 from '../../../../public/img/gallery/9.jpg';

interface Props {
    className?: string;
}

const galleryImages: StaticImageData[] = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8, galleryImg9]

export const Slider: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                }}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                className="w-full h-[500px] overflow-y-auto py-2"
                zoom={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2.2,
                    },
                    1024: {
                        slidesPerView: 3.2,
                    },
                    1100: {
                        slidesPerView: 3.5,
                    },
                    1536: {
                        slidesPerView: 4.5,
                    },
                }}
            >
                {
                    galleryImages.map(img => 
                        <SwiperSlide key={img.src}><Image src={img} className='object-cover block w-full h-full rounded-lg pointer-events-none' alt='' /></SwiperSlide>
                    )
                }
            </Swiper>
            <div className="swiper-button-prev-custom absolute z-10 left-2 w-14 h-14 flex items-center justify-center rounded-full ring-2 ring-inset ring-[#24A746] shadow-[0_0_15px_2px_rgba(36,167,70,1)] hover:shadow-[0_0_15px_4px_rgba(36,167,70,1)] bg-gradient-to-r from-[#24A746] to-[#27C300]">
                <svg width="42" height="26" viewBox="0 0 52 26" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 12.8303H2H50ZM2 12.8303L14 1.83032L2 12.8303ZM2 12.8303L14 23.8303L2 12.8303Z"/>
                    <path d="M50 12.8303H2M2 12.8303L14 1.83032M2 12.8303L14 23.8303" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="swiper-button-next-custom absolute z-10 right-2 w-14 h-14 flex items-center justify-center rounded-full ring-2 ring-inset ring-[#24A746] shadow-[0_0_15px_2px_rgba(36,167,70,1)] hover:shadow-[0_0_15px_4px_rgba(36,167,70,1)] bg-gradient-to-r from-[#24A746] to-[#27C300]">
                <svg width="42" height="26" viewBox="0 0 52 26" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12.8303H50H2ZM50 12.8303L38 1.83032L50 12.8303ZM50 12.8303L38 23.8303L50 12.8303Z" />
                    <path d="M2 12.8303H50M50 12.8303L38 1.83032M50 12.8303L38 23.8303" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="swiper-pagination absolute -bottom-8"></div>
        </div>
    );
}