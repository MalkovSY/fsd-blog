import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.modules.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className, children, theme, ...otherProps
}) => {
  const classes = classNames(cls.Button, {}, [className, cls[theme]]);

  return (
    <button
      type="button"
      className={classes}
      data-testid="buttonTestId"
      {...otherProps}
    >
      {children}
    </button>
  );
};
