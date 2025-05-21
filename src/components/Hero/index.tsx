import React from "react";
import AnimatedButton from "../AnimatedButton";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
   return (
<section className="container-default h-[auto]" id="hero">
    <img src="/texture.webp" className='hero-bg' alt="Textura Paulo Moraes advogado" />

  <div className="flex flex-col md:flex-row justify-between gap-6">
  <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 hero-1 md:text-left">
      <div className="flex items-center gap-4 md:justify-start">
        <div className="v-bg-highlight h-[2px] w-[54px] rounded" data-aos="fade-up"></div>
        <h1 className="hidden">Paulo Moraes Advocacia e Consultoria Jurídica</h1>
        <h1 className="hidden">Paulo Moraes Advocacia e Consultoria Jurídica</h1>
        <h1 className="hidden">Paulo Moraes Advocacia e Consultoria Jurídica</h1>
        <h1 className="hidden">Paulo Moraes Advocacia e Consultoria Jurídica</h1>
        <h3 className="text-white text-xl tracking-widest uppercase mulish" data-aos="fade-right">Paulo Moraes</h3>
      </div>

      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight playfair" data-aos="fade-down" >
        Exerça seus direitos.
      </h1>

      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mulish" data-aos="fade-up">
      O seu caso é a minha prioridade. Entre em contato comigo, envie sua dúvida e farei o possível para te responder com toda a atenção que você merece.
      </p>
    <div className="flex flex-col md:flex-row gap-4 md:justify-start">
      <AnimatedButton withDefaultStyles className="v-bg-highlight text-white font-semibold uppercase" data-aos="flip-down"  onClick={() => {
        const url =
          "https://api.whatsapp.com/send?phone=558184472360&text=Olá!%20Gostaria%20de%20mais%20informações.";
        window.open(url, "_blank");
      }}>
        Fale comigo
      </AnimatedButton>
      <AnimatedButton withDefaultStyles className="border border-white text-white font-semibold uppercase" data-aos="flip-down">
        Resultados
      </AnimatedButton>
    </div>
    </div>
    
<div className="h-[400px] md:h-[600px] w-full md:w-1/2 v-bg-highlight relative z-10 overflow-hidden"     data-aos="fade-up"
data-aos-delay="200">
  <motion.span
    className="absolute inset-0 h-[100%] w-full z-0"
    initial={{ x: '100vw', backgroundColor: '#383844' }}  
    animate={{ x: '0%' }}  
    transition={{
      x: { duration: 2, ease: 'easeInOut' },
      backgroundColor: { delay: 2, duration: 2 }
    }}
  >
              <Image src="/paulo.webp" width={1800} height={1800} className='w-full h-full object-cover' alt='Paulo Moraes advocacia'/>
    
  </motion.span>
</div>
  </div>
</section>
  );
};

export default Hero;
