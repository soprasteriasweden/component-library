import * as React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/HyperLink.style.scss";

export interface IHyperLink {
    linkText: string;
    to: string | { pathname: string };
    className?: string;
    showIcon?: boolean;
    ariaLabel?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const HyperLink: React.FunctionComponent<IHyperLink> = ({ linkText, to, className = "", showIcon = true, ariaLabel, onClick }) => {
    return (
        <NavLink to={to} className={`hyper-link ${className}`.trim()} aria-label={ariaLabel} onClick={(event) => onClick ? onClick(event) : undefined}>
            {showIcon ? (
                <span className="hyper-link__icon" aria-hidden={true}>
                    <FontAwesomeIcon icon={faLink} />
                </span>
            ) : null}
            {linkText}
        </NavLink>
    );
};
