import * as React from "react";
import "../../assets/styles/HyperLink.style.scss";
export interface IHyperLink {
    linkText: string;
    to: string | {
        pathname: string;
    };
    className?: string;
    showIcon?: boolean;
    ariaLabel?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export declare const HyperLink: React.FunctionComponent<IHyperLink>;
