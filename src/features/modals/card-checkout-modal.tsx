'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardCheckoutForm } from "@/shared";
import { SocialIcons } from "@/shared/ui/links";
import Link from "next/link";
import { useState } from "react";

interface Props {
    children: React.ReactNode;
    card: Card;
}

export const CardCheckoutModal: React.FC<Props> = ({children, card}) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className="outline-0">
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Оформить карту</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                    <CardCheckoutForm card={card} formSubmited={() => setOpen(false)}/>
                    <div className="flex flex-col">
                        <p className="text-sm mb-1">Вы всегда можете связаться с нами по номеру:</p>
                        <Link href='tel:+73833803792' target="_blank" className="text-sm font-bold ms-1 mb-2">+7 (383) 380‒37‒92</Link>
                        <p className="text-sm mb-2">Наши соц. сети:</p>
                        <SocialIcons className="ms-2" telegram vk whatsapp />
                    </div>
            </DialogContent>
        </Dialog>
    );
}