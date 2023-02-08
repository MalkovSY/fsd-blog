import {useState} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button} from "shared/ui/Button/Button";

import cls from './Sidebar.modules.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const classes = classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className]);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={classes}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.switchersWrapper}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
