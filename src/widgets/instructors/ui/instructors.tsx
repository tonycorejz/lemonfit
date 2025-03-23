import { Instructor, Title } from "@/shared";
import { HTMLProps } from "react";

import instrucrorPhoto_1_1 from '../../../../public/img/instructors/drozdov-alexey/1.webp';
import instrucrorPhoto_1_2 from '../../../../public/img/instructors/drozdov-alexey/2.webp';
import instrucrorPhoto_1_3 from '../../../../public/img/instructors/drozdov-alexey/3.webp';
import instrucrorPhoto_1_4 from '../../../../public/img/instructors/drozdov-alexey/4.webp';
import instrucrorPhoto_1_5 from '../../../../public/img/instructors/drozdov-alexey/5.webp';
import instrucrorPhoto_1_6 from '../../../../public/img/instructors/drozdov-alexey/6.webp';
import instrucrorPhoto_1_7 from '../../../../public/img/instructors/drozdov-alexey/7.webp';
import instrucrorPhoto_1_8 from '../../../../public/img/instructors/drozdov-alexey/8.webp';
import instrucrorPhoto_2_1 from '../../../../public/img/instructors/timoshkova-galyna/1.webp';
import instrucrorPhoto_2_2 from '../../../../public/img/instructors/timoshkova-galyna/2.webp';
import instrucrorPhoto_2_3 from '../../../../public/img/instructors/timoshkova-galyna/3.webp';
import { InstructorCard } from "./instructor-card";

const drozdovAlexey: Instructor = {
    id: 1,
    gallery: [instrucrorPhoto_1_1, instrucrorPhoto_1_2, instrucrorPhoto_1_3, instrucrorPhoto_1_4, 
                instrucrorPhoto_1_5, instrucrorPhoto_1_6, instrucrorPhoto_1_7, instrucrorPhoto_1_8],
    name: 'Дроздов Алексей',
    achievements: '🧾 Сертифицированный персональный тренер (удостоверение САФБиС)\n\n📈 Личный опыт занятий более 12 лет (фитнес, пауэрлифтинг, тяжелая атлетика)\n\n🎓 У Алексея обширные знания в составление правильного, а главное комфортного, режима питания и тренировок для каждого человека, с учётом его индивидуальных возможностей и потребностей, так же возможна подготовка к соревнованиям по силовым видам спорта,исправлению осанки,коррекции фигуры,улучшению общего физического состояния,опыт работы с людьми,с ОВ.\n\n💪 Мастер Спорта по жиму лежа федерации WPC\n\n🏅 Мастер Спорта Международного Класса по жиму лежа федерации AWPC',
}

/*const timoshkovaGalyna: Instructor = {
    id: 2,
    gallery: [instrucrorPhoto_2_2, instrucrorPhoto_2_1, instrucrorPhoto_2_3],
    name: 'Тимошкова Галина',
    achievements: '💌 Индивидуальный подход к каждому, составление тренировок и питания с учетом особенностей и предпочтений. Помощь в коррекции осанки и исправлении фигуры (похудение, массанабор). Учимся жить в комфорте с собой и с едой.\n\n🎓 Образование:\n• Диплом по программе "Физическая культура" с присвоением квалификации "Фитнес-тренер" (УНЦ ООО "Сибирская Академия Фитнеса, Бодибилдинга и Спорта")\n• Удостоверение о повышении квалификации "Тренер по фитнесу" (УНЦ ООО "Сибирская Академия Фитнеса, Бодибилдинга и Спорта") \n• Удостоверение о повышении квалификации "Функциональная диагностика опорно-двигательного аппарата" (УНЦ ООО "Сибирская Академия Фитнеса, Бодибилдинга и Спорта")\n• Сертификаты «Базисы работы персонального тренера» (от Александра Филиппова)\n\n💪🏼 Регалии:\n• МС по Hip thrust (ягодичный подъем)',
    
}*/

export const Instructors: React.FC<HTMLProps<HTMLDivElement>> = ({...props}) => {

    return (
        <div {...props} className={`w-full max-w-7xl flex flex-col items-center sm:justify-between justify-center p-6 lg:px-8 ${props.className}`}>
            <Title className='w-full mb-6'>Наши тренеры</Title>
            <div className="w-full self-start grid gap-2 grid-cols-1 sm:grid-cols-2">
                <InstructorCard instructor={drozdovAlexey}/>
                {/*<InstructorCard instructor={timoshkovaGalyna}/>*/}
            </div>
        </div>
    );
}