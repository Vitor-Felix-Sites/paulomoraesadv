import type { Metadata } from "next";
import "./globals.css";

import {  Playfair_Display, Poppins } from 'next/font/google';



const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500', '600', '700', '800', '900'
  ],
  style: ['normal', 'italic'],
});
export const metadata: Metadata = {
  title: "Paulo Moraes Advocacia e Consultoria Jurídica",
  description: "Escritório de advocacia com sedes em Recife-PE, especializado em falências, recuperações judiciais, direito das sucessões e terceiro setor. Atuamos na defesa dos seus direitos com comprometimento e excelência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.className} ${playfairDisplay.className}`}>
      <head>
        <title>Paulo Moraes Advocacia e Consultoria Jurídica | Recife-PE</title>

        <meta
          name="description"
          content="Escritório de advocacia com sedes em Recife-PE, especializado em falências, recuperações judiciais, direito das sucessões e terceiro setor. Atuamos na defesa dos seus direitos com comprometimento e excelência."
        />

        <meta
          property="og:title"
          content="Paulo Moraes Advocacia e Consultoria Jurídica"
        />
        <meta
          property="og:description"
          content="Auxiliando clientes na recuperação de créditos e causas jurídicas complexas. Escritório de advocacia em Recife-PE com atendimento nacional."
        />
        <meta property="og:url" content="https://www.seudominio.com.br" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.seudominio.com.br/imagem-da-logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Paulo Moraes Advocacia e Consultoria Jurídica"
        />
        <meta
          name="twitter:description"
          content="Atendimento jurídico de excelência em falências, sucessões e terceiro setor. Escritório com sedes em Recife-PE."
        />
        <meta
          name="twitter:image"
          content="https://www.seudominio.com.br/imagem-da-logo.jpg"
        />

        <meta
          name="author"
          content="Paulo Moraes Advocacia e Consultoria Jurídica"
        />

        <meta
          name="keywords"
          content="advogado Recife, recuperação judicial, falência, direito das sucessões, terceiro setor, advogado empresarial, consultoria jurídica, Paulo Moraes"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
