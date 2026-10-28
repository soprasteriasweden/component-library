import * as React from "react";
import { HyperLink, IHyperLink } from "../Link/HyperLink";
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

const hasNoDestination = (props: ITableLinkCell): props is ITableLinkCellButton =>
    props.to === undefined && props.href === undefined;

export const TableLinkCell: React.FunctionComponent<ITableLinkCell> = (props) => {
    if (hasNoDestination(props)) {
        const { linkText, onClick, disabled = false, className = "", ariaLabel } = props;
        return (
            <td>
                <button
                    type="button"
                    className={`hyper-link table-link-button ${disabled ? "hyper-link--disabled" : ""} ${className}`.replace(/\s+/g, " ").trim()}
                    aria-label={ariaLabel}
                    disabled={disabled}
                    onClick={onClick}
                >
                    {linkText}
                </button>
            </td>
        );
    }

    return (
        <td>
            <HyperLink {...props} />
        </td>
    );
};
