import { useTranslations } from "next-intl";
import LangSwitcher from "./components/LangSwitcher";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  const t = useTranslations("");
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <ThemeSwitch />
      <LangSwitcher />
      {t("hello")}
    </div>
  );
}
