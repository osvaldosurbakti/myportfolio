import { useTheme } from "@/context/ThemeContext";

export function useThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return { theme, toggleTheme };
}
