import Link, { LinkProps } from "next/link";

type Props = {
    children?: React.ReactNode;
    pClassNames?: string;
} & LinkProps & React.HTMLProps<HTMLAnchorElement>

export const ArrowLink: React.FC<Props> = ({children, pClassNames, ...props}) => {
    return (
        <Link {...props} href={props.href} className={`flex flex-row items-center ${props.className}`}>
            <p className={`font-sans font-bold standart-text text-nowrap text-sm me-4 ${pClassNames}`}>{children}</p>
            <svg width="32" height="13" viewBox="0 0 32 13" fill="#212121" stroke="#24A746" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.83026H31H1ZM31 6.83026L23.5 1.83026L31 6.83026ZM31 6.83026L23.5 11.8303L31 6.83026Z" />
                <path d="M1 6.83026H31M31 6.83026L23.5 1.83026M31 6.83026L23.5 11.8303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
    );
}