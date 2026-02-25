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

const REVIEWS_LABEL = "\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0442\u0437\u044b\u0432\u044b \u043e \u043d\u0430\u0441";
const REVIEWS_TITLE = "\u041e\u0442\u0437\u044b\u0432\u044b \u043e \u043d\u0430\u0441";
const REVIEWS_2GIS = "\u041e\u0442\u0437\u044b\u0432\u044b \u0432 2 Gis \u279c";
const REVIEWS_YANDEX = "\u041e\u0442\u0437\u044b\u0432\u044b \u0432 \u042f.\u041a\u0430\u0440\u0442\u0430\u0445 \u279c";
const CONTACTS_LABEL = "\u0412\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443:";
const SOCIAL_LABEL = "\u041d\u0430\u0448\u0438 \u0441\u043e\u0446. \u0441\u0435\u0442\u0438:";
const LEGAL_LABEL = "\u0418\u041f \u0411\u0430\u0440\u0430\u043d\u043e\u0432 \u041d\u0438\u043a\u043e\u043b\u0430\u0439 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447 \u0438 \u0418\u041d\u041d 540407560710";

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
        <FooterDocuments documents={footerDocumentsData} />
      <div className="flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden p-6 lg:px-8">
        
        <p className="text-center">{LEGAL_LABEL}</p>
      </div>
    </footer>
  );
};
