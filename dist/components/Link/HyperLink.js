import * as React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/HyperLink.style.scss";
export const HyperLink = ({ linkText, to, className = "", showIcon = true, ariaLabel, onClick }) => {
    return (React.createElement(NavLink, { to: to, className: `hyper-link ${className}`.trim(), "aria-label": ariaLabel, onClick: (event) => onClick ? onClick(event) : undefined },
        showIcon ? (React.createElement("span", { className: "hyper-link__icon", "aria-hidden": true },
            React.createElement(FontAwesomeIcon, { icon: faLink }))) : null,
        linkText));
};
