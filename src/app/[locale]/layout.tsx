import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { Header } from "../components/Header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Template",
  description: "`create-next-app` Template",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning className={inter.className}>
      <body>
        <Providers locale={locale}>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
