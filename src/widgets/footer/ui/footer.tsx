import { Logo } from "@/shared";
import { ArrowLink, SocialIcons } from "@/shared/ui/links";

export const Footer: React.FC = () => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <div className="overflow-hidden w-full max-w-7xl p-6 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
                <Logo />
                <SocialIcons className="" telegram vk whatsapp />
                <ArrowLink href='https://go.2gis.com/j4s7o' target="_blank" className=''>Прочитать отзывы на 2GIS</ArrowLink>
            </div>
        </footer>
    );
}