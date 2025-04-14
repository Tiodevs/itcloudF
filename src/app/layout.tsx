import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "It Cloud Solution",
  description: "Pagina do cloud it solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
