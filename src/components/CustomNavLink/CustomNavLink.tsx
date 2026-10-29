import React from "react";
import { NavLink } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/CustomNavLink.style.scss";

interface ICustomNavLink extends React.ComponentProps<typeof NavLink> {
    children?: React.ReactNode;
    icon?: IconDefinition;
}

export const CustomNavLink: React.FunctionComponent<ICustomNavLink> = (props) => {
    return (
        <>
            <NavLink {...props} >
                {props.icon && <FontAwesomeIcon className="custom-nav-link-icon" icon={props.icon} />}
                {props.children}    
            </NavLink>
        </>
    );
}