import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.modules.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    m = 'sizeM',
    l = 'sizeL',
    xl = 'sizeXl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize
}

export const Button = memo(({
  className, children, theme, square, size, ...otherProps
}: ButtonProps) => {
  const classes = classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]]);

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
});
