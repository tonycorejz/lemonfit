import { AboutUs, CallToAction, Contacts, FrontBlock, Gallery, Prices, Stocks } from "@/widgets";
import { Instructors } from "@/widgets";

export default function Home() {
  return (
    <main className="flex flex-col gap-1 items-center">
      <FrontBlock />
      <AboutUs />
      <Gallery id='gallery' />
      <Prices id='prices' />
      <Stocks id='stocks' />
      <Instructors id='instructors' />
      <Contacts id='contacts' />
      <CallToAction />
    </main>
  );
}
