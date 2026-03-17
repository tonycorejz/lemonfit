import Script from "next/script";

export default function LkBase() {
  return (
    <div className="">
      <Script
        src="https://reservi.ru/widget-fit1c.v4/public/init.js" data-fit-apikey="288a1229-2774-4bdf-be32-76685b618ade" data-theme='light'>
      </Script>
    </div>
  );
}
