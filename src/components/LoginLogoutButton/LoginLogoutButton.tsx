import * as React from "react";
import { NavLink } from "react-router-dom";
import { CustomNavLink } from "../CustomNavLink/CustomNavLink";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

interface ILoginLogoutButton {
    AuthConsumer: React.Consumer<any>;
}

export const LoginLogoutButton: React.FunctionComponent<ILoginLogoutButton> = ({ AuthConsumer }) => {
    return (
        <AuthConsumer>
            {
                ({ isAuthenticated, login, logout }) => {
                    if (isAuthenticated) {
                        return <CustomNavLink icon={faPowerOff} to="Logga ut" className="nav-link" onClick={logout}>Logga ut</CustomNavLink>
                    }

                    return <NavLink to="Logga in" className="nav-link" onClick={login}>Logga in</NavLink>
                }
            }
        </AuthConsumer>
    );
}