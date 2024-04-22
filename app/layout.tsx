import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Template",
  description: "`create-next-app` Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <Providers>
          <div>navbar</div>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
