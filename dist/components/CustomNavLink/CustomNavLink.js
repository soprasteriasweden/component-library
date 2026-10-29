import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/CustomNavLink.style.scss";
export const CustomNavLink = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavLink, Object.assign({}, props),
            props.icon && React.createElement(FontAwesomeIcon, { className: "custom-nav-link-icon", icon: props.icon }),
            props.children)));
};
