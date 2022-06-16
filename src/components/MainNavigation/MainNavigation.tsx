import * as React from "react";
import { NavLink } from 'react-router-dom';
import './MainNavigation.style.scss';

interface IMainNaviagation {
    imagePath: string;
    rightContent?: React.ReactNodeArray | React.ReactNode | undefined;
    informationTopRight?: string;
}

export const MainNavigation: React.FunctionComponent<IMainNaviagation> = ({ imagePath, rightContent, children, informationTopRight }) => {
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
                    <nav className="navbar navbar-expand-lg navbar-light navbar-main">
                        {children}
                    </nav>
                </div>
            </div>
        </div>
    );
}