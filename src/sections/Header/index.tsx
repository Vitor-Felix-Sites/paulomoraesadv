"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../AnimatedButton";

interface AnimatedButtonContactProps {
  id?: string;
}

const AnimatedButtonContact: React.FC<AnimatedButtonContactProps> = ({
  id,
}) => {
  return (
    <AnimatedButton
      className="uppercase v-bg-highlight text-white gap-2"
      withDefaultStyles
      id={id}
      onClick={() => {
        const url =
          "https://api.whatsapp.com/send?phone=558184472360&text=Olá!%20Gostaria%20de%20mais%20informações.";
        window.open(url, "_blank");
      }}
    >
      Contato
    </AnimatedButton>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <div>
      <header className="flex justify-between items-center py-[20px] px-[40px] relative header w-full">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-dourada.webp"
            alt="Logo Paulo Moraes Advocacia"
            width={80}
            height={80}
            id="logo"
          />
        </div>

        <nav className="hidden md:flex items-center gap-[22px] text-white">
          <ul className="flex gap-[42px] uppercase">
            <li>
              <a className="hover:text-[#DFAE4F]" href="#">
                Início
              </a>
            </li>
            <li>
              <a className="hover:text-[#DFAE4F]" href="#escritorio">
                Escritório
              </a>
            </li>
            <li>
              <a className="hover:text-[#DFAE4F]" href="#practice-areas">
                Áreas de atuação
              </a>
            </li>
            <li>
              <a className="hover:text-[#DFAE4F]" href="#">
                FAQ
              </a>
            </li>
          </ul>
          <AnimatedButtonContact id="btn-contact" />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <AnimatedButton
            className="v-bg-highlight w-12 h-12 rounded-full flex items-center justify-center"
            withDefaultStyles={false}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedButton>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="w-full v-bg flex flex-col gap-6 p-6 text-white container-default w-container"
            id="mobile-menu"
          >
            {[
              { text: "Início", href: "#" },
              { text: "Escritório", href: "#escritorio" },
              { text: "Áreas de atuação", href: "#practice-areas" },
              { text: "FAQ", href: "#faq" },
            ].map(({ text, href }) => (
              <motion.a
                key={text}
                href={href}
                variants={itemVariants}
                className="block hover:text-[#DFAE4F] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                {text}
              </motion.a>
            ))}
            <AnimatedButtonContact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
