import Link from "next/link";

interface Props {
    telegram?: boolean;
    vk?: boolean;
    whatsapp?: boolean;
    className?: string;
}

export const SocialIcons: React.FC<Props> = ({ telegram, vk, whatsapp, className }) => {
    return (
        <div className={`${className} flex`}>
            {
                telegram && 
                <Link href='https://t.me/LemonFitBot' target="_blank" className={`${(vk || whatsapp) && 'me-3'}`}>
                   <svg 
                        width="45" 
                        height="45" 
                        viewBox="0 0 45 45" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="fill-[#24A746] hover:fill-[#9BCEA8] h-8 w-auto"
                    >
                        <path d="M22 0C34.15 0 44 9.85 44 22C44 34.15 34.15 44 22 44C9.85 44 0 34.15 0 22C0 9.85 9.85 0 22 0ZM29.589 
                            30.968C29.993 29.727 31.89 17.353 32.123 14.914C32.194 14.176 31.96 13.685 31.504 13.465C30.951 13.2 30.133 
                            13.332 29.182 13.675C27.879 14.145 11.224 21.216 10.262 21.626C9.35 22.014 8.487 22.436 8.487 23.049C8.487 
                            23.48 8.743 23.722 9.447 23.973C10.179 24.234 12.024 24.793 13.115 25.094C14.165 25.384 15.358 25.132 16.028 
                            24.716C16.737 24.275 24.929 18.795 25.516 18.314C26.103 17.834 26.572 18.449 26.092 18.93C25.612 19.41 19.99 
                            24.867 19.248 25.623C18.347 26.54 18.986 27.491 19.591 27.872C20.28 28.307 25.24 31.633 25.987 32.167C26.734 
                            32.701 27.491 32.943 28.185 32.943C28.879 32.942 29.244 32.028 29.589 30.968Z" 
                        />
                    </svg>
                </Link>
            }
            {
                vk &&
                <Link href='https://vk.com/lemonfit' target="_blank" className={`${whatsapp && 'me-3'}`}>
                    <svg 
                        width="45" 
                        height="45" 
                        viewBox="0 0 45 45" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="fill-[#24A746] hover:fill-[#9BCEA8] h-8 w-auto"
                    >
                        <path d="M22.5 0C10.0937 0 0 10.0937 0 22.5C0 34.9063 10.0937 45 22.5 45C34.9073 45 45 34.9063 45 22.5C45 10.0937 
                            34.9073 0 22.5 0ZM32.2562 26.9364C34.4446 28.8792 34.8995 29.5728 34.9738 29.6912C35.8807 31.1292 33.9682 31.3043 
                            33.9682 31.3043H29.9377C29.9377 31.3043 28.9565 31.3151 28.1182 30.7595C26.7515 29.8643 25.3203 28.1289 24.3147 
                            28.4302C23.4704 28.6826 23.4783 29.8233 23.4783 30.7986C23.4783 31.1478 23.1779 31.3043 22.5 31.3043C21.8221 
                            31.3043 21.5403 31.3043 21.24 31.3043C19.0321 31.3043 16.6363 30.5609 14.2464 28.0634C10.8655 24.5328 7.90043 
                            17.4209 7.90043 17.4209C7.90043 17.4209 7.72533 17.0628 7.91609 16.8447C8.13228 16.6001 8.72022 16.6314 8.72022 
                            16.6314L12.6284 16.6304C12.6284 16.6304 12.9962 16.6999 13.2603 16.8858C13.4785 17.0384 13.5998 17.3299 13.5998 
                            17.3299C13.5998 17.3299 14.2562 19.4977 15.0926 20.88C16.7263 23.578 17.4864 23.6465 18.0411 23.356C18.8511 22.9353 
                            18.587 20.0671 18.587 20.0671C18.587 20.0671 18.6232 18.8354 18.2005 18.2866C17.8748 17.8621 17.2516 17.6361 16.9797 
                            17.6009C16.7596 17.5725 17.1274 17.1871 17.596 16.967C18.2221 16.6882 19.0741 16.6167 20.5435 16.6304C21.6871 16.6412 
                            22.0167 16.7097 22.4628 16.8124C23.8118 17.1235 23.4783 17.9442 23.4783 20.8262C23.4783 21.7497 23.3511 23.0478 
                            24.0476 23.4783C24.3479 23.6641 25.3771 23.8911 27.2084 20.9172C28.078 19.5065 28.7697 17.1665 28.7697 17.1665C28.7697 
                            17.1665 28.9125 16.9092 29.1346 16.7821C29.3615 16.652 29.3547 16.6549 29.6658 16.6549C29.9768 16.6549 33.0965 16.6304 
                            33.7813 16.6304C34.4651 16.6304 35.1068 16.6226 35.2174 17.0237C35.3759 17.5999 34.7126 19.574 33.032 21.7164C30.2703 
                            25.2323 29.9641 24.9036 32.2562 26.9364Z" 
                        />
                    </svg>
                </Link>
            }
            {
                whatsapp &&
                <Link href='https://wa.me/79930043186' target="_blank" className="">
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-[#24A746] hover:fill-[#9BCEA8] h-8 w-auto"
                    >
                        <path d="M22.5001 0C10.0938 0 0.000145196 10.0937 0.000145196 22.5C0.000145196 26.3739 1.0009 30.1833 2.89872 
                            33.5446L0.0363407 43.7576C-0.0575721 44.0932 0.033406 44.4532 0.276014 44.7026C0.462861 44.8953 0.717208 
                            45 0.978403 45C1.05666 45 1.1359 44.9902 1.21318 44.9716L11.8723 42.3313C15.1269 44.0785 18.7925 
                            45 22.5001 45C34.9063 45 45 34.9063 45 22.5C45 10.0937 34.9063 0 22.5001 0ZM33.8185 30.4396C33.3372 31.772 
                            31.0285 32.9879 29.9192 33.1513C28.9233 33.2971 27.6633 33.3597 26.2801 32.9253C25.4417 32.6612 24.3656 32.311 
                            22.9872 31.723C17.193 29.252 13.4091 23.491 13.1196 23.1104C12.831 22.7299 10.761 20.0182 10.761 17.2115C10.761 
                            14.4049 12.2528 13.0246 12.783 12.4533C13.3133 11.882 13.9384 11.7391 14.3238 11.7391C14.7092 11.7391 15.0937 11.744 
                            15.4312 11.7597C15.7863 11.7773 16.2627 11.6257 16.7313 12.7389C17.2126 13.8815 18.3679 16.6882 18.5107 
                            16.9748C18.6555 17.2604 18.7514 17.594 18.5597 17.9746C18.3679 18.3551 18.272 18.5928 17.9825 18.9264C17.6929 
                            19.26 17.376 19.6699 17.1157 19.9262C16.8262 20.2109 16.5259 20.519 16.8624 21.0903C17.1989 21.6616 18.3581 
                            23.5291 20.076 25.0415C22.2819 26.9843 24.1435 27.587 24.7207 27.8726C25.2979 28.1583 25.6354 28.1103 25.9719 
                            27.7298C26.3084 27.3483 27.4158 26.0638 27.8003 25.4935C28.1847 24.9232 28.5702 25.0171 29.1004 25.2078C29.6306 
                            25.3976 32.4705 26.777 33.0476 27.0626C33.6248 27.3483 34.0103 27.4911 34.155 27.7288C34.2998 27.9655 34.2998 
                            29.1082 33.8185 30.4396Z"
                        />
                    </svg>
                </Link>
            }
        </div>
    );
}