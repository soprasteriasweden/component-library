import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
export const LoginLogoutButton = ({ AuthConsumer }) => {
    return (_jsx(AuthConsumer, { children: ({ isAuthenticated, login, logout }) => {
            if (isAuthenticated) {
                return _jsx(NavLink, { to: "Logga ut", className: "nav-link", onClick: logout, children: "Logga ut" });
            }
            return _jsx(NavLink, { to: "Logga in", className: "nav-link", onClick: login, children: "Logga in" });
        } }));
};
