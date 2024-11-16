import { AboutUs, CallToAction, Contacts, FrontBlock, Gallery, Prices } from "@/widgets";
import { Instructors } from "@/widgets";

export default function Home() {
  return (
    <main className="flex flex-col gap-1 items-center">
      <FrontBlock />
      <AboutUs />
      <Gallery id='gallery'/>
      <Prices id='prices'/>
      <Instructors />
      <Contacts id='contacts'/>
      <CallToAction />
    </main>
  );
}
