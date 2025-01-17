import Link from "next/link";

interface Props {
    schedulClassName?: string;
    lkClassName?: string;
    onLinkClick?: () => void;
}

export const AdditionalMenuLinks: React.FC<Props> = ({schedulClassName, lkClassName, onLinkClick}) =>{
    return (
        <>
            <Link onClick={onLinkClick} href='/schedule' className={`flex items-center font-sans font-bold text-sm px-3 py-2 ring-2 ring-inset ring-[#24A746] rounded-3xl hover:bg-[#9BCEA8] group ${schedulClassName}`}>
                <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg" className="me-2 w-5 fill-[#9BCEA8] group-hover:fill-white" >
                    <path d="M29 8.45833V9.66667H0V8.45833C0 5.12213 2.70546 2.41667 6.04167 2.41667H7.25V1.20833C7.25 0.541333 7.79133 0 8.45833 0C9.12533 0 9.66667 0.541333 9.66667 1.20833V2.41667H19.3333V1.20833C19.3333 0.541333 19.8747 0 20.5417 0C21.2087 0 21.75 0.541333 21.75 1.20833V2.41667H22.9583C26.2945 2.41667 29 5.12213 29 8.45833ZM29 20.5417C29 25.2058 25.2046 29 20.5417 29C15.8787 29 12.0833 25.2058 12.0833 20.5417C12.0833 15.8775 15.8787 12.0833 20.5417 12.0833C25.2046 12.0833 29 15.8775 29 20.5417ZM22.9583 21.2498L21.75 20.0414V18.125C21.75 17.458 21.2087 16.9167 20.5417 16.9167C19.8747 16.9167 19.3333 17.458 19.3333 18.125V20.5417C19.3333 20.8619 19.4602 21.17 19.6874 21.396L21.2498 22.9583C21.721 23.4296 22.4871 23.4296 22.9583 22.9583C23.4296 22.4871 23.4296 21.721 22.9583 21.2498ZM9.66667 20.5417C9.66667 17.1233 11.2472 14.0771 13.7134 12.0833H0V22.9583C0 26.2945 2.70546 29 6.04167 29H13.7134C11.2472 27.0063 9.66667 23.96 9.66667 20.5417Z" />
                </svg>
                <p className="font-sans font-bold text-sm group-hover:text-white">Расписание</p>
            </Link>
            <Link onClick={onLinkClick} href='/lk' className={`flex items-center px-3 py-2 ring-2 ring-inset ring-[#24A746] rounded-3xl hover:bg-[#9BCEA8] group ${lkClassName}`}>
                <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg" className="me-2 w-5 fill-[#9BCEA8] group-hover:fill-white" >
                    <path d="M19.3333 28.1711C17.8205 28.7076 16.1941 29 14.5 29C12.8059 29 11.1795 28.7076 9.66667 28.1711V25.375C9.66667 22.7094 11.8344 20.5417 14.5 20.5417C17.1656 20.5417 19.3333 22.7094 19.3333 25.375V28.1711ZM14.5 8.45833C13.1672 8.45833 12.0833 9.54221 12.0833 10.875C12.0833 12.2078 13.1672 13.2917 14.5 13.2917C15.8328 13.2917 16.9167 12.2078 16.9167 10.875C16.9167 9.54221 15.8328 8.45833 14.5 8.45833ZM29 14.5C29 19.8565 26.0807 24.5425 21.75 27.0534V25.375C21.75 21.3766 18.4984 18.125 14.5 18.125C10.5016 18.125 7.25 21.3766 7.25 25.375V27.0534C2.91933 24.5425 0 19.8565 0 14.5C0 6.50446 6.50446 0 14.5 0C22.4955 0 29 6.50446 29 14.5ZM19.3333 10.875C19.3333 8.20942 17.1656 6.04167 14.5 6.04167C11.8344 6.04167 9.66667 8.20942 9.66667 10.875C9.66667 13.5406 11.8344 15.7083 14.5 15.7083C17.1656 15.7083 19.3333 13.5406 19.3333 10.875Z"/>
                </svg>
                <p className="font-sans font-bold text-sm group-hover:text-white">Личный кабинет</p>
            </Link>
        </>
    );
}