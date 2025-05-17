"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../AnimatedButton";

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
    <>
      <header className="flex justify-between items-center h-[105px] w-full px-4 md:px-8 border-b border-[#e5e5e517] bg-[#1E2027] container-default w-container">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo Advogado Paulo Moraes"
            width={80}
            height={80}
          />
        </div>

        <nav className="hidden md:flex items-center gap-[22px] text-white">
          <ul className="flex gap-[42px] uppercase">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Escritório</a>
            </li>
            <li>
              <a href="#">Áreas de atuação</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <AnimatedButton className="uppercase bg-[#DFAE4F] px-[20px] py-[10px] w-[168px] h-[54px] text-white" id="btn-contact">
            Contato
          </AnimatedButton>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <AnimatedButton
            className="v-bg-highlight w-12 h-12 rounded-full flex items-center justify-center"
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
            {["Home", "About me", "Practice areas", "Pages"].map((text) => (
              <motion.a
                key={text}
                href="#"
                variants={itemVariants}
                className="block"
              >
                {text}
              </motion.a>
            ))}
            <AnimatedButton
              className="uppercase v-bg-highlight px-[20px] py-[10px] w-[168px] h-[54px] text-white"
              
            >
              Contato
            </AnimatedButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
