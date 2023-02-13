import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.modules.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const classes = classNames(cls.Navbar, {}, [className]);

  return (
    <div className={classes}>
      <div className={cls.links}>
        <AppLink to="/about" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('Главная страница')}</AppLink>
      </div>
    </div>
  );
};
