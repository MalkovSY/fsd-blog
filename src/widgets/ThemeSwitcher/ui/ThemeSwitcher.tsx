import { classNames } from "shared/lib/classNames/classNames";
import {useTheme} from "shared/lib/useTheme/useTheme";

import cls from './ThemeSwitcher.modules.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme }  = useTheme();

    const classes = classNames(cls.ThemeSwitcher, {}, [className]);

    return (
        <button
            className={classes}
            onClick={toggleTheme}
        >
            toggle switcher
        </button>
    );
};
