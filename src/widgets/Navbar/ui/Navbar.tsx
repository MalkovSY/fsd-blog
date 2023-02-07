import {AppLink} from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";

import cls from './Navbar.modules.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const classes = classNames(cls.Navbar, {}, [className]);

    return (
        <div className={classes}>
            <div className={cls.links}>
                <AppLink to='/about' className={cls.mainLink}>about</AppLink>
                <AppLink to='/'>main </AppLink>
            </div>
        </div>
    );
};
