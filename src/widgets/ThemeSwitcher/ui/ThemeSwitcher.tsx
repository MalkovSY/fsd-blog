import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/useTheme/useTheme";
import { Button } from "shared/ui/Button/Button";
import ThemeSwitcherIcon from 'shared/assets/icons/icon-theme-switcher.svg';

import cls from './ThemeSwitcher.modules.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme }  = useTheme();

    const classes = classNames(cls.ThemeSwitcher, {}, [className]);

    return (
        <Button
            className={classes}
            onClick={toggleTheme}
        >
            <ThemeSwitcherIcon />
        </Button>
    );
};
