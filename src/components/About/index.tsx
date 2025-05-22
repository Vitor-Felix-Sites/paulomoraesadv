import { motion } from 'framer-motion';
import React from 'react';
import AnimatedButton from '../AnimatedButton';

const About = () => {
  return (
    <section className="container-default bg-white flex flex-col-reverse md:flex-col lg:flex-row items-start justify-between gap-12 w-screen overflow-x-hidden" id='escritorio'>
      <div className="w-full lg:w-1/2 flex">
        <div
          className="h-[400px] md:h-[600px] w-full lg:max-w-full v-bg-highlight relative z-10 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <motion.div
            className="absolute inset-0 h-full w-full z-0"
            initial={{ x: '100%', backgroundColor: '#383844' }}
            animate={{ x: '0%' }}
            transition={{
              x: { duration: 2, ease: 'easeInOut' },
              backgroundColor: { delay: 2, duration: 2 },
            }}
          >
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8192591576712!2d-34.9335552!3d-8.0175659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19f70aac0c2b%3A0x1d724d636b960cd9!2sPaulo%20Moraes%20-%20Advocacia%20%7C%20Consumidor%20%7C%20C%C3%ADvel%20%7C%20Trabalhista!5e0!3m2!1spt-BR!2sbr!4v1747815620721!5m2!1spt-BR!2sbr"
            className="w-full h-full object-cover"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa do escritório Paulo Moraes"
            />
          </motion.div>
        </div>
      </div>

  <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8">
  <span
    className="uppercase text-sm tracking-widest text-gray-600 font-bold mulish"
    data-aos="fade-down"
  >
    Sobre o escritório
  </span>

  <h2
    className="text-4xl md:text-5x1 font-serif font-semibold mt-4 text-gray-900 playfair leading-snug"
    data-aos="fade-left"
  >
    Um escritório preparado
    <br className="hidden sm:block" /> para defender seus direitos
  </h2>

  <p
    className="text-lg text-gray-700 mt-6 leading-relaxed max-w-xl"
    data-aos="fade-left"
  >
    O <strong>Escritório Moraes Advocacia</strong> atua com seriedade e excelência nas áreas de
    <strong> Direito Civil</strong>, <strong> Previdenciário</strong>, <strong> Trabalhista</strong>,
    <strong> Consumidor</strong>, <strong> Bancário</strong>, <strong> Imobiliário</strong>,
    <strong> Sucessório</strong>, <strong> Falências e Recuperações Judiciais</strong>. Também possui
    atuação em <strong>Direito Público</strong> e no registro de
    <strong> Marcas e Patentes</strong>, oferecendo soluções jurídicas claras, eficazes e com total comprometimento.
  </p>

  <p
    className="text-lg text-gray-700 mt-4 leading-relaxed max-w-xl"
    data-aos="fade-left"
  >
    <strong>Paulo Moraes</strong>, fundador do escritório, é formado em Direito pela Universidade Católica de Pernambuco
    e pós-graduado em Direito Civil e Processo Civil pela <strong>ESA</strong> – Escola Superior de Advocacia da <strong>OAB/PE</strong>.
  </p>

  <div>
    <p className="mt-2 font-medium text-gray-800" data-aos="fade-left">Paulo Moraes</p>
    <p
      className="text-sm text-yellow-600 font-semibold uppercase tracking-wide"
      data-aos="fade-left"
    >
      Fundador do Escritório
    </p>
  </div>

  <AnimatedButton
    withDefaultStyles
    className="v-bg-highlight uppercase mt-10"
    data-aos="fade-up"
    onClick={() => {
      const url =
        "https://api.whatsapp.com/send?phone=558184472360&text=Olá!%20Gostaria%20de%20mais%20informações.";
      window.open(url, "_blank");
    }}
  >
    Agendar uma consulta
  </AnimatedButton>
</div>
    </section>
  );
};

export default About;
