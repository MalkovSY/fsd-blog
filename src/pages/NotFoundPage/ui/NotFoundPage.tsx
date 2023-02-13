import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.modules.scss';

interface NotFoundPageProps {
    className?: string;
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation();

    const classes = classNames(cls.NotFoundPage, {}, [className]);

    return (
        <div className={classes}>
            {t('Страница не найдена, 404')}
        </div>
    );
}
