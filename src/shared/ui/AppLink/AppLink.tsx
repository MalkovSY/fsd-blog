import { FC, ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.modules.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo(({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}: AppLinkProps) => {
  const classes = classNames(cls.AppLink, {}, [className, cls[theme]]);

  return (
    <Link
      to={to}
      className={classes}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
