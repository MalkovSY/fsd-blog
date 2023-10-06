import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemContext';

interface UseThemeResult {
  theme?: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.DEFAULT;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT;

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
