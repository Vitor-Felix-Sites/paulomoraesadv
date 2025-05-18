import React from "react";
import AnimatedButton from "../AnimatedButton";

const Hero = () => {
   return (
<section className="container-default">
  <div className="flex flex-col md:flex-row justify-between">
    <div className="flex flex-col gap-6 hero-1 md:text-left">
      <div className="flex items-center gap-4 md:justify-start">
        <div className="v-bg-highlight h-[2px] w-[54px]" data-aos="fade-up"></div>
        <h3 className="text-white text-xl tracking-widest uppercase mulish" data-aos="fade-right">Paulo Moraes</h3>
      </div>

      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight playfair" data-aos="fade-down">
        Lorem ipsum dolor sit amet.
      </h1>

      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mulish" data-aos="fade-up">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam obcaecati cupiditate iusto, libero laudantium architecto. Sint soluta non praesentium. Praesentium nihil beatae earum tempora distinctio! Veniam enim recusandae rem impedit?      </p>

    <div className="flex flex-col md:flex-row gap-4 md:justify-start">
      <AnimatedButton className="v-bg-highlight py-4 px-8 text-white font-semibold uppercase" data-aos="flip-down">
        Fale comigo
      </AnimatedButton>
      <AnimatedButton className="border border-white py-4 px-8 text-white font-semibold uppercase" data-aos="flip-down">
        Resultados
      </AnimatedButton>
    </div>
    </div>

    <div className="hero-2 mt-10 md:mt-0"></div>
  </div>
</section>
  );
};

export default Hero;
