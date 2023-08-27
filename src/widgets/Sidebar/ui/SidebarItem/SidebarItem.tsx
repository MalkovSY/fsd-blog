import React from 'react';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/itemList';

import cls from './SidebarItem.modules.scss';

interface SidebarItemProps extends SidebarItemType {
    collapsed: boolean;
}

export const SidebarItem = ({
  Icon, path, text, collapsed,
}: SidebarItemProps) => {
  const { t } = useTranslation();

  const classes = classNames(cls.link, { [cls.collapsed]: collapsed });

  return (
    <AppLink
      to={path}
      theme={AppLinkTheme.SECONDARY}
      className={classes}
    >
      <Icon className={cls.linkIcon} />
      <span className={cls.linkText}>{t(text)}</span>
    </AppLink>
  );
};
