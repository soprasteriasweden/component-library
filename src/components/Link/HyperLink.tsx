import * as React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/HyperLink.style.scss";

interface IHyperLinkCommon {
    linkText: string;
    openInNewTab?: boolean;
    disabled?: boolean;
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

export const HyperLink: React.FunctionComponent<IHyperLink> = ({ linkText, openInNewTab = false, disabled = false, className = "", showIcon = true, ariaLabel, onClick, ...destination }) => {
    const content = (
        <>
            {showIcon && (
                <span className="hyper-link__icon" aria-hidden={true}>
                    <FontAwesomeIcon icon={openInNewTab ? faExternalLink : faLink} />
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

    if (disabled) {
        return (
            <span
                className={`hyper-link hyper-link--disabled ${className}`.trim()}
                aria-disabled="true"
            >
                {content}
            </span>
        );
    }

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
