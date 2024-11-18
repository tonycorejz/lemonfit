import React, { HTMLProps } from 'react';
import { Title } from '@/shared';
import { ArrowLink, SocialIcons } from '@/shared/ui/links';
import { Slider } from './slider';

export const Gallery: React.FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {
    return (
        <div {...props} className={`w-full flex flex-col py-6 ${props.className}`}>
            <div className="w-full px-6 lg:px-8 mx-auto max-w-7xl mb-6 flex flex-wrap justify-between lg:justify-normal">
                <Title className='w-full lg:w-auto lg:me-auto lg:mb-0'>Тренажерный зал</Title>
                <ArrowLink href='/#gallery' className='hidden sm:flex lg:me-4'>Больше в наших социальных сетях</ArrowLink>
                <SocialIcons className='items-center' telegram vk whatsapp />
            </div>
            <Slider className='relative w-full mx-auto flex items-center justify-center pb-6' />
        </div>
    );
}