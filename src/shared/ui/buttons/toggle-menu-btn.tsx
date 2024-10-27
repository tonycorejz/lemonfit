import { ButtonHTMLAttributes } from "react";

type Props = {
    active: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const TogleMenuBtn: React.FC<Props> = ({active, ...props}) => {
    if(!active)
    return (
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" {...props}>
            <span className="sr-only">Открыть меню</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    );

    return (
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" {...props}>
            <span className="sr-only">Закрыть меню</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    );
} 