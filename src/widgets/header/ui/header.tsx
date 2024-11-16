'use client';

import { Logo, MenuLink, TogleMenuBtn } from "@/shared";
import { SocialIcons } from "@/shared/ui/links";
import { useState } from "react";
import { AdditionalMenuLinks } from "./additionsl-menu-links";


export const Header: React.FC = () => {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

    return (
        <header className="w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Навигация по сайту">
                <div className="flex lg:flex-1 me-2">
                    <Logo/>
                </div>
                <div className="flex lg:hidden">
                    <TogleMenuBtn active={mobileMenuIsOpen} onClick={() => setMobileMenuIsOpen(true)}/>
                </div>
                <div className="hidden lg:flex lg:items-center">
                    <MenuLink className="me-3 xl:me-5" href='/#gallery'>Тренажерный зал</MenuLink>
                    <MenuLink className="me-3 xl:me-5" href='/#contacts'>Контакты</MenuLink>
                    <MenuLink className="me-3 xl:me-5" href='/#prices'>Цены</MenuLink>
                    <AdditionalMenuLinks schedulClassName="me-3" lkClassName="me-5" />
                    <SocialIcons telegram vk whatsapp />
                </div>
            </nav>
            <div className={`lg:hidden ${!mobileMenuIsOpen && 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logo/>
                        <TogleMenuBtn active={mobileMenuIsOpen} onClick={() => setMobileMenuIsOpen(false)} />
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <MenuLink className="-mx-3 block px-3 py-2 text-base leading-7" href='/#gallery'>Тренажерный зал</MenuLink>
                                <MenuLink className="-mx-3 block px-3 py-2 text-base leading-7" href='/#contacts'>Контакты</MenuLink>
                                <MenuLink className="-mx-3 block px-3 py-2 text-base leading-7" href='/#prices'>Цены</MenuLink>
                            </div>
                            <div className="py-6">
                                <AdditionalMenuLinks schedulClassName="w-48 mb-3" lkClassName="w-48" />
                            </div>
                            <SocialIcons className="py-6" telegram vk whatsapp />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}