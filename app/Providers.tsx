"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange={false}
      enableColorScheme={false}
      themes={["light", "dark", "custom"]}
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
