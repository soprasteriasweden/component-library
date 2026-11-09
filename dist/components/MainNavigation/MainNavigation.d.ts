import * as React from "react";
import 'bootstrap';
import '../../assets/styles/MainNavigation.style.scss';
export interface IMainNavigationLink {
    label: string;
    to: string;
}
export interface IMainNavigationMenu {
    label: string;
    items: IMainNavigationLink[];
}
interface IMainNavigation {
    imagePath: string;
    rightContent?: React.ReactNode[] | React.ReactNode | undefined;
    informationTopRight?: string;
    children?: React.ReactNode;
    homeLink?: IMainNavigationLink;
    menuItems?: IMainNavigationMenu[];
}
export declare const MainNavigation: React.FunctionComponent<IMainNavigation>;
export {};
