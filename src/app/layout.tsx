import type { Metadata } from "next";
import "@/app/global.css"

export const metadata: Metadata = {
  title: "Simples adicionador de tarefas",
  description: "Adicione suas tarefas aqui, elas ficam até você ir embora do site, e sempre vai resetar para o layout padrão :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
