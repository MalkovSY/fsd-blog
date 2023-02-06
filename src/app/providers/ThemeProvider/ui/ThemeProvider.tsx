import React, {useState, FC, useMemo} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemContext";

// Каст типов нужен из-за того, что сторедж всегда возвращает строку
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
