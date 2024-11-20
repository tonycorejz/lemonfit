import Image from "next/image";
import aboutUsImg from '../../../../public/img/about-us-image.webp';
import { Title } from "@/shared";

export const AboutUs: React.FC = () => {
    return (
        <div className="overflow-hidden w-full flex flex-col">
            <div className="w-full bg-[#212121] flex items-center justify-center pb-36 md:pb-10">
                <div className="flex flex-col max-w-7xl p-6 lg:px-8">
                    <Title className='text-white'>Фитнес клуб на <br/> Сибиряков-Гвардейцев</Title>
                    <p className="font-medium text-white mb-2 md:w-1/2">
                        В <b>LemonFit</b> вас ждет не просто тренировка, 
                        а настоящее путешествие к лучшей версии себя! 
                        В нашем клубе царит заряжающая атмосфера, 
                        где вы найдете поддержку, мотивацию и новых друзей. 
                        Мы предлагаем комфортные условия для 
                        тренировок и восстановления: просторные раздевалки, 
                        душевые и уютные зоны отдыха. Присоединяйтесь к нам 
                        и откройте для себя мир фитнеса, 
                        где забота о теле и духе идут рука об руку!
                    </p>
                </div>
            </div>
            <div className="relative mx-auto w-full h-20 max-w-7xl">
                <Image 
                    src={aboutUsImg} 
                    className="absolute right-0 bottom-0 w-96 md:w-[450px] lg:w-[500px] xl:w-[600px] md:-right-8"
                    alt='Изображение к блоку о нас'
                />
            </div>
        </div>
    );
}