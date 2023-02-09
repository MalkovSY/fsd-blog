import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import cls from './LangSwitcher.modules.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const classes = classNames(cls.LangSwitcher, {}, [className]);

    const onLangToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button onClick={onLangToggle} theme={ButtonTheme.CLEAR} className={classes}>
            {t('Язык')}
        </Button>
    );
};
