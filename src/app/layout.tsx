import "./globals.css";
import { Playfair_Display, Poppins, Mulish } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Paulo Moraes Advocacia e Consultoria Jurídica | Advogado em Recife",
  description: "Escritório de advocacia em Recife especializado em direito empresarial, falências, recuperações judiciais e consultoria jurídica personalizada. Atendimento profissional e confiança para proteger seus direitos.",
  keywords: [
    "advogado Recife",
    "advocacia empresarial",
    "consultoria jurídica Recife",
    "recuperação judicial",
    "falência",
    "advogado especializado",
    "escritório de advocacia Recife",
    "direito empresarial",
    "consultoria jurídica",
    "advogado para empresas",
  ],
  openGraph: {
    title: "Paulo Moraes Advocacia e Consultoria Jurídica",
    description: "Atendimento jurídico especializado em direito empresarial, falências e recuperações judiciais. Proteja seus direitos com um advogado de confiança em Recife.",
    url: "https://paulomoraesadv.com.br",  
    siteName: "Paulo Moraes Advocacia e Consultoria Jurídica",
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "C4f1ktvuCnAl_EhArfrA-NfT0XXr--6rpW0MyYY_2Cs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-BR" className={`${poppins.className} ${playfairDisplay.className} ${mulish.className}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
