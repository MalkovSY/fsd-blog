import { classNames } from 'shared/lib/classNames/classNames';

import cls from './PageLoader.modules.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    const classes = classNames(cls.PageLoader, {}, [className]);

    return (
        <div className={classes}>gruzim...</div>
    );
};
