import { VFC, SVGProps } from 'react';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/icons-about.svg';
import MainIcon from 'shared/assets/icons/icons-home.svg';

export interface SidebarItemType {
    Icon: VFC<SVGProps<SVGSVGElement>>;
    path: string;
    text: string;
}

type SidebarItemListType = Array<SidebarItemType>

export const sidebarItemList: SidebarItemListType = [
  {
    Icon: AboutIcon,
    path: RouterPath.about,
    text: 'О нас',
  },
  {
    Icon: MainIcon,
    path: RouterPath.main,
    text: 'Главная страница',
  },
  {
    Icon: MainIcon,
    path: RouterPath.profile,
    text: 'Профиль',
  },
];
