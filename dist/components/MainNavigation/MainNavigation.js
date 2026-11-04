import * as React from "react";
import { NavLink } from 'react-router-dom';
import '../../assets/styles/MainNavigation.style.scss';
const COLLAPSE_ID = "main-navigation-collapse";
export const MainNavigation = ({ imagePath, rightContent, children, informationTopRight, homeLink, menuItems = [] }) => {
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
                React.createElement("nav", { className: "navbar navbar-expand-lg bg-light navbar-main" },
                    menuItems.length > 0 && (React.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#${COLLAPSE_ID}`, "aria-controls": COLLAPSE_ID, "aria-expanded": "false", "aria-label": "Toggle navigation" },
                        React.createElement("span", { className: "navbar-toggler-icon" }))),
                    homeLink && (React.createElement("ul", { className: "navbar-nav" },
                        React.createElement("li", { className: "nav-item" },
                            React.createElement(NavLink, { to: homeLink.to, className: "nav-link" }, homeLink.label)))),
                    menuItems.length > 0 && (React.createElement("div", { className: "navbar-collapse collapse", id: COLLAPSE_ID },
                        React.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" }, menuItems.map((menu, index) => (React.createElement("li", { key: menu.label, className: "nav-item dropdown" },
                            React.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: `${COLLAPSE_ID}-menu-${index}`, role: "button", "data-bs-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, menu.label),
                            React.createElement("div", { className: "dropdown-menu", "aria-labelledby": `${COLLAPSE_ID}-menu-${index}` }, menu.items.map(link => (React.createElement(NavLink, { key: link.to, to: link.to, className: "dropdown-item" }, link.label)))))))))),
                    children)))));
};
