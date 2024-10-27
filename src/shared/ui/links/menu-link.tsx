import Link, { LinkProps } from "next/link";
import { ReactElement, ReactNode } from "react";

type Props = {
    children: ReactNode;
} & LinkProps & React.HTMLProps<HTMLAnchorElement>

export const MenuLink: React.FC<Props> = ({children, ...props}) => {
    return (
        <Link href={props.href} className={`font-sans font-bold text-sm p-2 hover:text-[#24A746] ${props.className}`}>
            {children}
        </Link>
    );
} 