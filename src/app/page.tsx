"use client"
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Spacement = () => {
  return (
    <div className="pt-[160px] w-full"></div>
  );
}


export default function Home() {
    
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div>
    <Header/>
    <img src="/texture.svg" className='hero-bg' alt="Textura Paulo Moraes advogado" />
    <Spacement/>
    <Hero/>
    </div>
  );
}
