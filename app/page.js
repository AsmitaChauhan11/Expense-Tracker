import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}
