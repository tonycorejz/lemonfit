import Image from "next/image";
import aboutUsImg from '../../../../public/img/about-us-image.png';

export const AboutUs = () => {
    return (
        <div className="relative overflow-hidden w-full bg-[#212121] mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
            <div className="flex flex-col">
                <h2 className="font-sans font-black text-white text-2xl mb-3">
                    Фитнес клуб на <br/> Сибиряков-Гвардейцев
                </h2>
                <p className="font-medium text-white mb-2">
                    В LemonFit вас ждет не просто тренировка, 
                    а настоящее путешествие к лучшей версии себя! 
                    В нашем клубе царит заряжающая атмосфера, 
                    где вы найдете поддержку, мотивацию и новых друзей. 
                    Мы предлагаем комфортные условия для 
                    тренировок и восстановления: просторные раздевалки, 
                    душевые и уютные зоны отдыха. Присоединяйтесь к нам 
                    и откройте для себя мир фитнеса, 
                    где забота о теле и духе идут рука об руку!
                </p>
                <Image src={aboutUsImg} alt='Изображение к блоку о нас' />
            </div>
        </div>
    );
}