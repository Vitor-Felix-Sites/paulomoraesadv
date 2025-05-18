import Head from "next/head";
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
  description: "Escritório de advocacia em Recife especializado em direito do trabalho & previdenciário, Direito civil e família, consultoria jurídica personalizada. Atendimento profissional e confiança para proteger seus direitos.",
   manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff',
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
    "direito civil",
    "paulo moraes advocacia",
    "paulo moraes advogado",
    "paulo moraes",
    "advogado paulo moraes",
  ],
  openGraph: {
    title: "Paulo Moraes Advocacia e Consultoria Jurídica",
    description: "Escritório de advocacia em Recife especializado em direito do trabalho & previdenciário, Direito civil e família, consultoria jurídica personalizada. Atendimento profissional e confiança para proteger seus direitos.",
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
