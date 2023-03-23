import * as React from "react";
import { NavLink } from "react-router-dom";
export var LoginLogoutButton = function (_a) {
    var AuthConsumer = _a.AuthConsumer;
    return (React.createElement(AuthConsumer, null, function (_a) {
        var isAuthenticated = _a.isAuthenticated, login = _a.login, logout = _a.logout;
        if (isAuthenticated) {
            return React.createElement(NavLink, { to: "Logga ut", className: "nav-link", onClick: logout }, "Logga ut");
        }
        return React.createElement(NavLink, { to: "Logga in", className: "nav-link", onClick: login }, "Logga in");
    }));
};
