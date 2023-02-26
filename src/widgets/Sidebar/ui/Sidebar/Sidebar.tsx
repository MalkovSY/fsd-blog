import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/icons-about.svg';
import MainIcon from 'shared/assets/icons/icons-home.svg';

import cls from './Sidebar.modules.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const classes = classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className]);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebarTestId" className={classes}>
      <div className={cls.linksWrapper}>
        <AppLink
          to={RouterPath.about}
          theme={AppLinkTheme.SECONDARY}
          className={cls.link}
        >
          <AboutIcon className={cls.linkIcon} />
          <span className={cls.linkText}>{t('О нас')}</span>
        </AppLink>
        <AppLink
          to={RouterPath.main}
          theme={AppLinkTheme.SECONDARY}
          className={cls.link}
        >
          <MainIcon className={cls.linkIcon} />
          <span className={cls.linkText}>{t('Главная страница')}</span>
        </AppLink>
      </div>
      <Button
        className={cls.collapseBtn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.l}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchersWrapper}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
        />
      </div>
    </div>
  );
};
