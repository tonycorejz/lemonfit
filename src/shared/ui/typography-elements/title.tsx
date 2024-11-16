import { FC, HTMLAttributes, ReactNode } from "react"

type Props = {
    children?: ReactNode;
} & HTMLAttributes<HTMLHeadElement>

export const Title: FC<Props> = ({children, ...props}) => {
    return (
        <h2 {...props} className={`font-sans font-black standart-text text-2xl mb-3 ${props.className}`}>
            {children}
        </h2>
    );
}