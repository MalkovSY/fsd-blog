import { classNames } from 'shared/lib/classNames/classNames';

import cls from './PageLoader.modules.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
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
