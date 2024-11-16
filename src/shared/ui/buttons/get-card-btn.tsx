import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const GetCardButton: React.FC<Props> = ({children, ...props}) => {
    return (
        <button 
            {...props}
            type="button" 
            className={`inline-flex items-center rounded-full px-4 sm:px-6 py-3 ring-2 ring-inset ring-[#24A746] shadow-[0_0_15px_2px_rgba(36,167,70,1)] hover:shadow-[0_0_15px_4px_rgba(36,167,70,1)] bg-gradient-to-r from-[#24A746] to-[#27C300] ${props.className}`} 
        >
            <span className="sr-only">Оформить клубную карту</span>
            <p className="font-sans font-bold text-sm text-white me-3">{children}</p>
            <svg className="fill-white" width="32" height="19" viewBox="0 0 32 19" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9.33032H29.6861H2ZM29.6861 9.33032L22.7646 1.83032L29.6861 9.33032ZM29.6861 9.33032L22.7646 16.8303L29.6861 9.33032Z"/>
                <path d="M2 9.33032H29.6861M29.6861 9.33032L22.7646 1.83032M29.6861 9.33032L22.7646 16.8303" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
} 