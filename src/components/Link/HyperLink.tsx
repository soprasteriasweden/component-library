import * as React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/HyperLink.style.scss";

interface IHyperLinkCommon {
    linkText: string;
    openInNewTab?: boolean;
    className?: string;
    showIcon?: boolean;
    ariaLabel?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

type HyperLinkDestination =
    | {
        to: string | { pathname: string };
        href?: never;
    }
    | {
        href: string;
        to?: never;
    };

export type IHyperLink = IHyperLinkCommon & HyperLinkDestination;

export const HyperLink: React.FunctionComponent<IHyperLink> = ({ linkText, openInNewTab = false, className = "", showIcon = true, ariaLabel, onClick, ...destination }) => {
    const content = (
        <>
            {showIcon && (
                <span className="hyper-link__icon" aria-hidden={true}>
                    <FontAwesomeIcon icon={faLink} />
                </span>
            )}
            {linkText}
        </>
    );

    const commonProps = {
        className: `hyper-link ${className}`.trim(),
        "aria-label": ariaLabel,
        onClick,
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined
    };

    if (destination.href !== undefined) {
        return (
            <a href={destination.href} {...commonProps}>
                {content}
            </a>
        );
    }

    return (
        <NavLink to={destination.to} {...commonProps}>
            {content}
        </NavLink>
    );
};
