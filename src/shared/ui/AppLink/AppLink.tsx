import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

import cls from './AppLink.modules.scss';

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ to, className, children, ...otherProps }) => {
    const classes = classNames(cls.AppLink, {}, [className]);

    return (
        <Link
            to={to}
            className={classes}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
