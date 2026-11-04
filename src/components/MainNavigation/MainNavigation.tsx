import * as React from "react";
import { NavLink } from 'react-router-dom';
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

const COLLAPSE_ID = "main-navigation-collapse";

export const MainNavigation: React.FunctionComponent<IMainNavigation> = ({ imagePath, rightContent, children, informationTopRight, homeLink, menuItems = [] }) => {
    return (
        <div className="navigation-container">
            <div className="top-right-information">{informationTopRight}</div>
            <div className="row align-items-end">
                <div className="col-6">
                    <div className="navbar">
                        <NavLink to="/">
                            <img src={imagePath} alt="Till startsidan" />
                        </NavLink>
                    </div>
                </div>
                <div className="col-6">
                    {
                        rightContent ? rightContent : null
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg bg-light navbar-main">
                        {menuItems.length > 0 && (
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target={`#${COLLAPSE_ID}`} aria-controls={COLLAPSE_ID} aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        )}
                        {homeLink && (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={homeLink.to} className="nav-link">{homeLink.label}</NavLink>
                                </li>
                            </ul>
                        )}
                        {menuItems.length > 0 && (
                            <div className="navbar-collapse collapse" id={COLLAPSE_ID}>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {menuItems.map((menu, index) => (
                                        <li key={menu.label} className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id={`${COLLAPSE_ID}-menu-${index}`} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {menu.label}
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby={`${COLLAPSE_ID}-menu-${index}`}>
                                                {menu.items.map(link => (
                                                    <NavLink key={link.to} to={link.to} className="dropdown-item">{link.label}</NavLink>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {children}
                    </nav>
                </div>
            </div>
        </div>
    );
}