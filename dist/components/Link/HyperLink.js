var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/HyperLink.style.scss";
export const HyperLink = (_a) => {
    var { linkText, openInNewTab = false, className = "", showIcon = true, ariaLabel, onClick } = _a, destination = __rest(_a, ["linkText", "openInNewTab", "className", "showIcon", "ariaLabel", "onClick"]);
    const content = (React.createElement(React.Fragment, null,
        showIcon && (React.createElement("span", { className: "hyper-link__icon", "aria-hidden": true },
            React.createElement(FontAwesomeIcon, { icon: faLink }))),
        linkText));
    const commonProps = {
        className: `hyper-link ${className}`.trim(),
        "aria-label": ariaLabel,
        onClick,
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined
    };
    if (destination.href !== undefined) {
        return (React.createElement("a", Object.assign({ href: destination.href }, commonProps), content));
    }
    return (React.createElement(NavLink, Object.assign({ to: destination.to }, commonProps), content));
};
