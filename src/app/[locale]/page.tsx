import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("");
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      {t("hello")}
    </div>
  );
}
