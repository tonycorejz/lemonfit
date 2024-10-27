import { AboutUs, FrontBlock, Gallery, Header } from "@/widgets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col gap-1 row-start-2 items-center sm:items-start">
        <FrontBlock />
        <AboutUs />
        <Gallery />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
