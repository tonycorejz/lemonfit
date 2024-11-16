import Script from "next/script";

export default function LkBase() {
  return (
    <div className="">
        <div data-get-fit-index-lk></div>
        <Script src="https://reservi.ru/widget-fit1c.v2/js/config.js" data-fit-salon-id="288a1229-2774-4bdf-be32-76685b618ade"></Script>
    </div>
  );
}