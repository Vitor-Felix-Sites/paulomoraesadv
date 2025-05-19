"use client"
import { Header } from "@/components/Header";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./globals.css";
import Hero from "@/components/Hero";
import AOS from "aos";
import PracticeAreas from "@/components/PracticeAreas";
import Spacement from "@/components/Spacement";
import SpacementMobile from "@/components/SpacementMobile";
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
    <SpacementMobile/>
    <PracticeAreas />
    <Spacement/>
    </div>
  );
}
