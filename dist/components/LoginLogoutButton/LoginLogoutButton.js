import * as React from "react";
import { NavLink } from "react-router-dom";
import { CustomNavLink } from "../CustomNavLink/CustomNavLink";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
export const LoginLogoutButton = ({ AuthConsumer }) => {
    return (React.createElement(AuthConsumer, null, ({ isAuthenticated, login, logout }) => {
        if (isAuthenticated) {
            return React.createElement(CustomNavLink, { icon: faPowerOff, to: "Logga ut", className: "nav-link", onClick: logout }, "Logga ut");
        }
        return React.createElement(NavLink, { to: "Logga in", className: "nav-link", onClick: login }, "Logga in");
    }));
};
