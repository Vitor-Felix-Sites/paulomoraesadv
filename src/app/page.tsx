import { Header } from "@/components/Header";
import Hero from "@/components/Hero";

const Spacement = () => {
  return (
    <div className="pt-[160px] w-full"></div>
  );
}


export default function Home() {
  return (
    <div>
    <Header/>
    <img src="/texture.svg" className='hero-bg' alt="Textura Paulo Moraes advogado" />
    <Spacement/>
    <Hero/>
    </div>
  );
}
