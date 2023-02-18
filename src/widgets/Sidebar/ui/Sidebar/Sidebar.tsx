import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
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
      <Button data-testid="sidebar-toggle" onClick={onToggle}>{t('toggle')}</Button>
      <div className={cls.switchersWrapper}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
