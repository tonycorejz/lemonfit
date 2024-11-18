import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Logo } from "@/shared";
import { ArrowLink, SocialIcons } from "@/shared/ui/links";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <div className="overflow-hidden w-full max-w-7xl p-6 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
                <Logo />
                <SocialIcons className="" telegram vk whatsapp />

                <Dialog>
                    <DialogTrigger asChild className="outline-0">
                        <ArrowLink href='#' className=''>Прочитать отзывы о нас</ArrowLink>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Отзывы о нас</DialogTitle>
                            <DialogDescription></DialogDescription> 
                        </DialogHeader>
                            <div className="flex flex-col items-start">
                                <Link  href='https://go.2gis.com/j4s7o' target="_blank" className="rounded border-[#24A746] border-2 p-1 px-2 text-sm font-bold mb-4">Отзывы в 2 Gis ➜</Link>
                                <Link  href='https://yandex.ru/maps/org/lemonfit/129994345380/reviews/' target="_blank" className="rounded border-[#24A746] border-2 p-1 px-2 text-sm font-bold mb-4">Отзывы в Я.Картах ➜</Link>
                                <p className="text-sm mb-1">Вы всегда можете связаться с нами по номеру:</p>
                                <Link href='tel:+73833803792' target="_blank" className="text-sm font-bold ms-1 mb-2">+7 (383) 380‒37‒92</Link>
                                <p className="text-sm mb-2">Наши соц. сети:</p>
                                <SocialIcons className="ms-2" telegram vk whatsapp />
                            </div>
                    </DialogContent>
                </Dialog>
            </div>
        </footer>
    );
}