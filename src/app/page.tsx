"use client"
import { Header } from "@/sections/Header";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./globals.css";
import Hero from "@/sections/Hero";
import AOS from "aos";
import PracticeAreas from "@/sections/PracticeAreas";
import About from "@/sections/About";
import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Spacement from "@/components/Spacement";
import SplitOpenLinesFullScreen from "@/components/SplitOpenLinesFullScreen";




export default function Home() {
    
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div>
    <SplitOpenLinesFullScreen/>
    <Header/>
    <Spacement/>
    <Hero/>
    <Spacement/>
    <About/>
    <Spacement/>
    <PracticeAreas />
    <Faq/>
    <Spacement/>
    <Footer/>
    </div>
  );
}
