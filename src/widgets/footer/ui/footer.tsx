import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Logo } from "@/shared";
import { ArrowLink, SocialIcons } from "@/shared/ui/links";
import Link from "next/link";

import { footerDocumentsData } from "../model/footer-documents-data";
import { FooterDocuments } from "./footer-documents";

const REVIEWS_LABEL = "Прочитать отзывы о нас";
const REVIEWS_TITLE = "Отзывы о нас";
const REVIEWS_2GIS = "Отзывы в 2 Gis ➜";
const REVIEWS_YANDEX = "Отзывы в Я.Картах ➜";
const CONTACTS_LABEL = "Вы всегда можете связаться с нами по номеру:";
const SOCIAL_LABEL = "Наши соц. сети:";
const LEGAL_LABEL = "ИП Баранов Николай Александрович и ИНН 540407560710";

export const Footer: React.FC = () => {
  return (
    <footer className="row-start-3 flex flex-col flex-wrap items-center justify-center gap-6">
      <div className="flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 overflow-hidden p-6 lg:px-8">
        <Logo />
        <SocialIcons className="" telegram vk whatsapp />

        <Dialog>
          <DialogTrigger asChild className="outline-0">
            <ArrowLink href="#" className="cursor-pointer">
              {REVIEWS_LABEL}
            </ArrowLink>
          </DialogTrigger>
          <DialogContent className="bg-white sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{REVIEWS_TITLE}</DialogTitle>
              <DialogDescription />
            </DialogHeader>
            <div className="flex flex-col items-start">
              <Link
                href="https://go.2gis.com/j4s7o"
                target="_blank"
                className="mb-4 rounded border-2 border-[#24A746] p-1 px-2 text-sm font-bold"
              >
                {REVIEWS_2GIS}
              </Link>
              <Link
                href="https://yandex.ru/maps/org/lemonfit/129994345380/reviews/"
                target="_blank"
                className="mb-4 rounded border-2 border-[#24A746] p-1 px-2 text-sm font-bold"
              >
                {REVIEWS_YANDEX}
              </Link>
              <p className="mb-1 text-sm">{CONTACTS_LABEL}</p>
              <Link href="tel:+73833803792" target="_blank" className="ms-1 mb-2 text-sm font-bold">
                +7 (383) 380-37-92
              </Link>
              <p className="mb-2 text-sm">{SOCIAL_LABEL}</p>
              <SocialIcons className="ms-2" telegram vk whatsapp />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden p-6 lg:px-8">
        <FooterDocuments documents={footerDocumentsData} />
        <p className="text-center">{LEGAL_LABEL}</p>
      </div>
    </footer>
  );
};
