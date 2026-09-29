import * as React from "react";
import "../../assets/styles/HyperLink.style.scss";
interface IHyperLinkCommon {
    linkText: string;
    openInNewTab?: boolean;
    className?: string;
    showIcon?: boolean;
    ariaLabel?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
type HyperLinkDestination = {
    to: string | {
        pathname: string;
    };
    href?: never;
} | {
    href: string;
    to?: never;
};
export type IHyperLink = IHyperLinkCommon & HyperLinkDestination;
export declare const HyperLink: React.FunctionComponent<IHyperLink>;
export {};
