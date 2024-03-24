import { useTheme } from "next-themes";
import { DarkTheme, LightTheme } from "../Svg";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14"
    >
      {/* Light Theme Symbol */}
      <LightTheme />
      {/* Dark Theme Symbol */}
      <DarkTheme />
    </button>
  );
};

export default ThemeToggler;
