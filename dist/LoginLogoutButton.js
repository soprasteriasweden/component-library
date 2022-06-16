import * as React from "react";

import { NavLink } from "react-router-dom";

export const LoginLogoutButton = ({ AuthConsumer }) => {

    return (React.createElement(AuthConsumer, null, ({ isAuthenticated, login, logout }) => {

        if (isAuthenticated) {

            return React.createElement(NavLink, { to: "Logga ut", className: "nav-link", onClick: logout }, "Logga ut");

        }

        return React.createElement(NavLink, { to: "Logga in", className: "nav-link", onClick: login }, "Logga in");

    }));

};

