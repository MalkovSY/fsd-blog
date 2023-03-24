import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.modules.scss';

export enum TextTheme {
  ERROR = 'error'
}

interface TextProps {
  title?: string;
  text?: string;
  theme?: TextTheme;
  className?: string;
}

export const Text = ({
  title, text, theme, className,
}: TextProps) => {
  const classes = classNames('', {}, [className, cls[theme]]);

  return (
    <div className={classes}>
      {title ? <p className={cls.title}>{title}</p> : null}
      {text ? <p className={cls.text}>{text}</p> : null}
    </div>
  );
};
