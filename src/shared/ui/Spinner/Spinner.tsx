import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Spinner.modules.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  const classes = classNames(cls.ldsRing, {}, [className]);

  return (
    <div className={classes}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
