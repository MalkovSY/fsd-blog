import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { sidebarItemList } from '../../model/itemList';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.modules.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const classes = classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
    className,
  ]);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const CollapseBtn = () => useMemo(
    () => (
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
    ),
    [],
  );

  const linkList = useMemo(() => sidebarItemList.map(({ Icon, path, text }) => (
    <SidebarItem
      key={path}
      Icon={Icon}
      path={path}
      text={text}
      collapsed={collapsed}
    />
  )), [collapsed]);

  return (
    <div data-testid="sidebarTestId" className={classes}>
      <div className={cls.linksWrapper}>
        {linkList}
      </div>
      <CollapseBtn />
      <div className={cls.switchersWrapper}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
});
