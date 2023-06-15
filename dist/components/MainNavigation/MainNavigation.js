import * as React from "react";
import { NavLink } from 'react-router-dom';
import '../../assets/styles/MainNavigation.style.scss';
export var MainNavigation = function (_a) {
    var imagePath = _a.imagePath, rightContent = _a.rightContent, children = _a.children, informationTopRight = _a.informationTopRight;
    return (React.createElement("div", { className: "navigation-container" },
        React.createElement("div", { className: "top-right-information" }, informationTopRight),
        React.createElement("div", { className: "row align-items-end" },
            React.createElement("div", { className: "col-6" },
                React.createElement("div", { className: "navbar" },
                    React.createElement(NavLink, { to: "/" },
                        React.createElement("img", { src: imagePath, alt: "Till startsidan" })))),
            React.createElement("div", { className: "col-6" }, rightContent ? rightContent : null)),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-lg-12" },
                React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light navbar-main" }, children)))));
};
