import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import '../../assets/styles/MainNavigation.style.scss';
export const MainNavigation = ({ imagePath, rightContent, children, informationTopRight }) => {
    return (_jsxs("div", { className: "navigation-container", children: [_jsx("div", { className: "top-right-information", children: informationTopRight }), _jsxs("div", { className: "row align-items-end", children: [_jsx("div", { className: "col-6", children: _jsx("div", { className: "navbar", children: _jsx(NavLink, { to: "/", children: _jsx("img", { src: imagePath, alt: "Till startsidan" }) }) }) }), _jsx("div", { className: "col-6", children: rightContent ? rightContent : null })] }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-lg-12", children: _jsx("nav", { className: "navbar navbar-expand-lg navbar-light navbar-main", children: children }) }) })] }));
};
