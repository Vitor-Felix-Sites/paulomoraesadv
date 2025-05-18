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
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
