import Script from "next/script";

export default function ScheduleBase() {
  return (
    <div>
        <div data-fit1c-calendar>Расписание работает на <a href="https://www.fitness1c.ru">1С:Фитнес клуб</a></div>
        <Script src="https://reservi.ru/widget-fit1c.v2/js/config.js" data-fit-salon-id="288a1229-2774-4bdf-be32-76685b618ade"></Script>
    </div>
  );
}