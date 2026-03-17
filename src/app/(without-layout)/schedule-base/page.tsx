import Script from "next/script";

export default function ScheduleBase() {
  return (
    <div>
      <Script
        src="https://reservi.ru/widget-fit1c.v4/public/init.js"
        data-fit-apikey="288a1229-2774-4bdf-be32-76685b618ade"
        data-type="schedule"
        data-theme='light'
        data-settings='{
          "url_data": {
            "club_id": "0da893b4-3941-11ef-9e09-00505683cb0f"
          }
        }'
      >
      </Script>
    </div>
  );
}
