import React from "react";
import {
  Briefcase,
  Gavel,
  Heart,
  Handshake,
  Banknote,
  Hospital,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Direito Civil e Família",
    icon: <Gavel className="w-12 h-12 text-yellow-500" />,
    description:
      "Há anos defendendo os interesses dos que mais precisam, com inúmeros casos de sucesso ações de divórcio, guarda, alimentos e partilha de bens.",
      styles:{
        title: 'text-lg mt-[60px] font-semibold mb-2 uppercase tracking-wide',
        description: 'text-gray-400 leading-relaxed',
        content: 'gap-8 pr-6 py-6 flex flex-col bordered-items'
      }
  },
  {
    title: "Direito Médico",
    icon: <Hospital  className="w-12 h-12 text-yellow-500" />,
   description:
      "Acompanho inúmeras pessoas no momento que mais necessitam veem seu direito a saúde negado arbitrariamente pelas operadoras de plano de saúde.",
      styles:{
        title: 'text-lg mt-[60px] font-semibold mb-2 uppercase tracking-wide',
        description: 'text-gray-400 leading-relaxed',
        content: 'gap-8 pr-6 py-6 flex flex-col bordered-items sm:pl-8 lg:pl-8'
      }
  },
  {
    title: "Direito Trabalhista e previdenciário",
    icon: <Briefcase  className="w-12 h-12 text-yellow-500" />,
    description:
      "Defendo há anos os interesses dos que mais precisam, com inúmeros casos de sucesso em ações trabalhistas e previdenciárias.",
      styles:{
        title: 'text-lg mt-[60px] font-semibold mb-2 uppercase tracking-wide',
        description: 'text-gray-400 leading-relaxed',
        content: 'gap-8 pr-6 py-6 flex flex-col bordered-items lg:pl-8'
      }
  },
  {
    title: "Direito das sucessões",
    icon: <Heart className="w-12 h-12 text-yellow-500" />,
    description:
      "Atuação na elaboração de testamentos, inventários judiciais e extrajudiciais, planejamento sucessório e partilha de bens, garantindo segurança jurídica e respeito à vontade do falecido.",
      styles:{
        title: 'text-lg mt-[60px] font-semibold mb-2 uppercase tracking-wide',
        description: 'text-gray-400 leading-relaxed',
        content: 'gap-8 pr-6 py-6 flex flex-col bordered-items sm:pl-8 lg:pl-0'
      }
  },
  {
    title: "Terceiro Setor",
    icon: <Handshake className="w-12 h-12 text-yellow-500" />,
    description:
      "Assessoria jurídica completa para fundações, associações e ONGs, incluindo regularização, elaboração de estatutos, compliance, captação de recursos e parcerias com o poder público.",
      styles:{
        title: 'text-lg mt-[60px] font-semibold mb-2 uppercase tracking-wide',
        description: 'text-gray-400 leading-relaxed',
        content: 'gap-8 pr-6 py-6 flex flex-col bordered-items  lg:pl-8'
      }
  },
  {
    title: "Falências e Recuperações Judiciais ",
    description:
      "Atuação estratégica na recuperação de empresas em crise, elaboração de planos de recuperação judicial e extrajudicial, além de condução de processos de falência, sempre com foco na preservação da atividade econômica e dos empregos.",
      styles:{
        title: 'text-lg mt-[60px] font-semibold mb-2 uppercase tracking-wide',
        description: 'text-gray-400 leading-relaxed',
        content: 'gap-8 pr-6 py-6 flex flex-col bordered-items sm:pl-8 lg:pl-8'
      },
      icon: <Banknote className="w-12 h-12 text-yellow-500"/>
  },
];

const PracticeAreas = () => {
  return (
    <section className="flex justify-center text-white  container-default" id="practice-areas">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight playfair" data-aos="fade-up">
              Áreas de atuação
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 " >
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              
              className={`bordered-items gap-y-6 pb-12 ${area.styles?.content}`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {area.icon}
              <div>
              <h4 className={`text-4xl leading-tight w-full truncate ${area.styles?.title}`}>
                {area.title}
              </h4>
              <p className={`text-lg pt-2 ${area.styles?.description}`}>                           
                {area.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
