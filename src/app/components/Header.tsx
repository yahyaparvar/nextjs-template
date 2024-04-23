import LangSwitcher from "./LangSwitcher";
import ThemeSwitch from "./ThemeSwitch";

export const Header = () => {
  return (
    <div className="flex flex-row max-w-screen-2xl mx-auto px-5">
      <ThemeSwitch />
      <LangSwitcher />
    </div>
  );
};
