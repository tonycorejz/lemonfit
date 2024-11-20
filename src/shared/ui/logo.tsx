import Image from "next/image";
import logo from '../../../public/img/logo.webp';

export const Logo = () => {
    return (
        <a href="/" className="-m-1.5 p-1.5 hover:opacity-50">
            <span className="sr-only">lemonfit</span>
            <Image
                src={logo} 
                className="w-60 h-auto"  
                priority
                alt="Логотип фитнес-клуба lemonfit" />
        </a>
    );
} 