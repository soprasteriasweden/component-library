import * as React from "react";
import { IHyperLink } from "../Link/HyperLink";
import "../../assets/styles/HyperLink.style.scss";
import "../../assets/styles/TableStyle.scss";
/**
 * onClick for opening modal
 * to and href for navigating links
 */
export interface ITableLinkCellButton {
    linkText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
    to?: never;
    href?: never;
}
export type ITableLinkCell = IHyperLink | ITableLinkCellButton;
export declare const TableLinkCell: React.FunctionComponent<ITableLinkCell>;
