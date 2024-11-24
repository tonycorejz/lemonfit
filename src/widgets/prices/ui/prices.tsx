import { CardCheckoutModal } from "@/features";
import { PriceCard, GetCardButton, Title, AdditionalPrice } from "@/shared";
import { HTMLProps } from "react";
import { promises as fs } from 'fs';



export const Prices: React.FC<HTMLProps<HTMLDivElement>> = async ({...props}) => {

    const priceCardsFile = await fs.readFile(process.cwd() + '/public/text-data/prices.json', 'utf8');
    const priceCards: PriceCard[] = JSON.parse(priceCardsFile);

    const additionalPriceCardsFile = await fs.readFile(process.cwd() + '/public/text-data/additionalPrices.json', 'utf8');
    const additionalPriceCards: AdditionalPrice[] = JSON.parse(additionalPriceCardsFile);

    return (
        <div {...props} className={`w-full max-w-7xl flex flex-col p-6 lg:px-8 ${props.className}`}>
            <Title className=''>Клубные карты</Title>
            <div className="w-full mb-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    priceCards.map(card => 
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
                    {
                        additionalPriceCards.map(aCard => 
                            <div key={aCard.title + aCard.price} className="w-full flex flex-row justify-between items-start mb-4">
                                <div className="flex flex-col me-1">
                                    <div className="text-xl font-black leading-5">{aCard.title}</div>
                                    {aCard.subtitle && <div className="">{aCard.subtitle}</div>}
                                </div>
                                <div className="text-[#24A943] text-xl font-bold text-nowrap leading-5">{aCard.price}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}