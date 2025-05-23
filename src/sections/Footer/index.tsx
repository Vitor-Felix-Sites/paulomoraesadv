import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 border-t border-zinc-800">
      <div className="container-default grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e missão */}
        <div>
          <h3 className="text-2xl font-bold v-text">Paulo Moraes</h3>
          <p className="mt-4 text-sm text-gray-400">
            Exerça seus direitos com confiança. Atuamos com comprometimento e excelência para defender seus interesses.
          </p>
        </div>

        <div className="flex flex-col gap-4 font-semibold">
          <h4 className="text-lg font-bold text-white mb-4">Navegação</h4>
          <ul className="flex flex-col gap-2 text-md">
            <li><a href="#" className="hover:text-green-500 transition">Início</a></li>
            <li><a href="#escritorio" className="hover:text-green-500 transition">Escritório</a></li>
            <li><a href="#practice-areas" className="hover:text-green-500 transition">Áreas de atuação</a></li>
            <li><a href="#faq" className="hover:text-green-500 transition">FAQ</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 v-text" />
              <span>(81) 99999-9999</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 v-text" />
              <span>contato@paulomoraesadv.com.br</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 v-text" />
              <span>Recife - PE, Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500 border-t border-zinc-800 pt-6">
        © {new Date().getFullYear()} Paulo Moraes Advocacia. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
