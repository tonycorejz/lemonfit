import { CardCheckoutModal } from "@/features";
import { Card, GetCardButton, Title } from "@/shared";
import { HTMLProps } from "react";



const cards: Card[] = [
    {
        title: "8 занятий",
        onlyDay: {
            price: '1 100₽',
            textInfo: 'пн-пт 07:00-17:00\nсб-вс 09:00-21:00',
        },
        full: {
            price: '1 550₽',
            textInfo: 'пн-пт 07:00-23:00\nсб-вс 09:00-21:00',
        },
    },
    {
        title: "1 месяц",
        subtitle: 'безлимит',
        onlyDay: {
            price: '1 900₽',
            textInfo: 'пн-пт 07:00-17:00\nсб-вс 09:00-21:00',
        },
        full: {
            price: '2 450₽',
            textInfo: 'пн-пт 07:00-23:00\nсб-вс 09:00-21:00',
        },
    },
    {
        title: "6 месяцев",
        subtitle: 'безлимит',
        onlyDay: {
            price: '6 750₽',
            textInfo: 'пн-пт 07:00-17:00\nсб-вс 09:00-21:00',
        },
        full: {
            price: '8 350₽',
            textInfo: 'пн-пт 07:00-23:00\nсб-вс 09:00-21:00',
        },
    },
    {
        title: "12 месяцев",
        subtitle: 'безлимит',
        onlyDay: {
            price: '10 900₽',
            textInfo: 'пн-пт 07:00-17:00\nсб-вс 09:00-21:00',
        },
        full: {
            price: '14 250₽',
            textInfo: 'пн-пт 07:00-23:00\nсб-вс 09:00-21:00',
        },
    },
]

export const Prices: React.FC<HTMLProps<HTMLDivElement>> = ({...props}) => {
    return (
        <div {...props} className={`w-full max-w-7xl flex flex-col p-6 lg:px-8 ${props.className}`}>
            <Title className=''>Клубные карты</Title>
            <div className="w-full mb-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    cards.map(card => 
                        <div key={card.title} className="w-full h-full px-3 py-4 flex flex-col items-center justify-between  text-standart-text  rounded-2xl border-2 border-[#24A746]">
                            <p className="text-[#24A943] text-2xl font-black leading-5 uppercase">{card.title}</p>
                            <p className="mb-2">{card.subtitle ?? '\u00A0'}</p>
                            <div className="w-full flex flex-row justify-between">
                                <div className="font-bold text-xl">Дневной</div>
                                <div className="text-[#24A943] font-bold  text-xl">{card.onlyDay?.price}</div>
                            </div>
                            <div className="whitespace-pre-line mb-4">{card.onlyDay?.textInfo}</div>
                            <div className="w-full flex flex-row justify-between">
                                <div className="font-bold text-xl">Полный</div>
                                <div className="text-[#24A943] font-bold  text-xl">{card.full?.price}</div>
                            </div>
                            <div className="whitespace-pre-line mb-6">{card.full?.textInfo}</div>
                            <CardCheckoutModal card={card}>
                                <GetCardButton className="px-3 sm:px-4">Оформить</GetCardButton>
                            </CardCheckoutModal>
                        </div>
                    )
                }
            </div>
            <div className="relative overflow-hidden w-full px-4 py-6 rounded-2xl bg-trener-bg bg-no-repeat bg-cover md:bg-[length:50%_auto] bg-[right_-250px_center] sm:bg-[right_-300px_center] md:bg-[right_0_center]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-[#000000ad] sm:to-[#00000031] md:to-[#00000000] from-50%"></div>
                <div className="relative w-full max-w-96 flex flex-col text-white">
                    <div className="w-full flex flex-row justify-between items-start mb-4">
                        <div className="flex flex-col me-1">
                            <div className="text-xl font-black leading-5">Персональный тренер</div>
                            <div className="">Разовое занятие</div>
                        </div>
                        <div className="text-[#24A943] text-xl font-bold text-nowrap leading-5">800₽</div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-start mb-4">
                        <div className="flex flex-col me-1">
                            <div className="text-xl font-black leading-5">Персональный тренер</div>
                            <div className="">1 месяц</div>
                        </div>
                        <div className="text-[#24A943] text-xl font-bold text-nowrap leading-5">6 000₽</div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-start mb-4">
                        <div className="flex flex-col me-1">
                            <div className="text-xl font-black leading-5">Разовое посещение</div>
                        </div>
                        <div className="text-[#24A943] text-xl font-bold text-nowrap leading-5">550₽</div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-start mb-4">
                        <div className="flex flex-col me-2">
                            <div className="text-xl font-black leading-5">Переоформление карты</div>
                        </div>
                        <div className="text-[#24A943] text-xl font-bold text-nowrap leading-5">1 000₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
}