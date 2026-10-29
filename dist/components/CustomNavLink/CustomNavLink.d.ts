import React from "react";
import { NavLink } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "../../assets/styles/CustomNavLink.style.scss";
interface ICustomNavLink extends React.ComponentProps<typeof NavLink> {
    children?: React.ReactNode;
    icon?: IconDefinition;
}
export declare const CustomNavLink: React.FunctionComponent<ICustomNavLink>;
export {};
