import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Form Builder is a cool tool to create forms"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
