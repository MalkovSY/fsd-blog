import {useState} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button} from "shared/ui/Button/Button";

import cls from './Sidebar.modules.scss';
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const classes = classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className]);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={classes}>
            <Button onClick={onToggle}>{t('toggle')}</Button>
            <div className={cls.switchersWrapper}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
