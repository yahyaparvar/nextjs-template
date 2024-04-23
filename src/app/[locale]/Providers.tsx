import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages as AbstractIntlMessages}
    >
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange={false}
        enableColorScheme={false}
        themes={["light", "dark", "custom"]}
        defaultTheme="system"
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
