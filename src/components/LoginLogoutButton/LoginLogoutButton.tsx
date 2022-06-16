import * as React from "react";
import { NavLink } from "react-router-dom";

interface ILoginLogoutButton {
    AuthConsumer: React.Consumer<any>;
}

export const LoginLogoutButton: React.FunctionComponent<ILoginLogoutButton> = ({ AuthConsumer }) => {
    return (
        <AuthConsumer>
            {
                ({ isAuthenticated, login, logout }) => {
                    if (isAuthenticated) {
                        return <NavLink to="Logga ut" className="nav-link" onClick={logout}>Logga ut</NavLink>
                    }

                    return <NavLink to="Logga in" className="nav-link" onClick={login}>Logga in</NavLink>
                }
            }
        </AuthConsumer>
    );
}