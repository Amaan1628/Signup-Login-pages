import Image from "next/image";
import { Header } from "./_components/header";
import Hero from "./_components/hero";
import OngoingChallenge from "./_components/ongoingChallenge";
import { TracingBeam } from "./_components/beam";
import { SparklesCore } from "./_components/sparkles";
import Features from "./_components/features";
import Prizes from "./_components/prizes";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="w-full">
      {/* <div className="bg-gradient-to-b from-[#32206A] bg-no-repeat to-[#130736] w-full fixed top-0 h-[200px]"></div> */}
      <TracingBeam className="h-full max-w-full ">
        <div className="w-full">
          <Header />
          <Hero />
          <OngoingChallenge />
          <Features />
          <Prizes />
        </div>
      </TracingBeam>
      <Footer />
    </main>
  );
}
