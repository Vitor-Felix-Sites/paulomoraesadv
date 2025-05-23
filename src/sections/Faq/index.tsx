import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faq = [
  {
    question: "Como agendar uma consulta com o Dr. Paulo Moraes?",
    answer:
      "Você pode agendar uma consulta diretamente pelo site, clicando no botão 'Agendar uma consulta', ou entrando em contato pelo WhatsApp, telefone ou e-mail disponíveis na seção de Contato.",
  },
  {
    question: "Quais são as áreas de atuação do escritório?",
    answer:
      "Atuamos nas áreas de Direito Civil, Família, Sucessões, Trabalhista, Previdenciário, Médico, Consumidor, Bancário, Imobiliário, além de Falências, Recuperações Judiciais, Terceiro Setor e contratos empresariais.",
  },
  {
    question: "O escritório atende causas em outras cidades ou estados?",
    answer:
      "Sim. Embora estejamos sediados em Pernambuco, podemos atender clientes de outras regiões, inclusive de forma totalmente online, sempre que juridicamente possível.",
  },
  {
    question: "O atendimento pode ser feito de forma online?",
    answer:
      "Sim, realizamos atendimentos online com a mesma atenção e comprometimento do atendimento presencial. Você pode enviar sua dúvida e agendar uma videoconferência.",
  },
  {
    question: "Quais documentos devo levar para uma consulta?",
    answer:
      "Os documentos variam conforme o tipo de caso, mas, de forma geral, é importante trazer documentos pessoais, contratos, notificações, decisões judiciais ou qualquer papel relacionado ao problema jurídico.",
  },
  {
    question: "Como funciona o pagamento dos honorários?",
    answer:
      "Os honorários são definidos com base na complexidade do caso, podendo ser pagos de forma parcelada. Sempre formalizamos os valores em contrato, garantindo total transparência.",
  },
  {
    question: "O escritório realiza atendimento gratuito ou pro bono?",
    answer:
      "Em casos específicos e mediante avaliação, podemos oferecer atendimento pro bono, especialmente quando se trata de causas sociais ou de evidente vulnerabilidade.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container-default" id="faq">
      <h2 className="text-3xl font-bold text-white mb-10 uppercase tracking-wide playfair" data-aos="fade-right">
        Faq
      </h2>
      <div className="space-y-4 pt-12">
        {faq.map((item, index) => (
          <div
            key={index}
            className="border  overflow-hidden"
            data-aos="fade-up"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left text-white font-medium text-lg"
            >
              {item.question}
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
