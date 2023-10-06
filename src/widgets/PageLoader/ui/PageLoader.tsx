import { classNames } from 'shared/lib/classNames/classNames';

import { Spinner } from 'shared/ui/Spinner/Spinner';
import cls from './PageLoader.modules.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className = '' }: PageLoaderProps) => {
  const classes = classNames(cls.PageLoader, {}, [className]);

  return (
    <Spinner className={classes} />
  );
};
