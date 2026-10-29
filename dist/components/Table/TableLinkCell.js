import * as React from "react";
import { HyperLink } from "../Link/HyperLink";
import "../../assets/styles/HyperLink.style.scss";
import "../../assets/styles/TableStyle.scss";
const hasNoDestination = (props) => props.to === undefined && props.href === undefined;
export const TableLinkCell = (props) => {
    if (hasNoDestination(props)) {
        const { linkText, onClick, disabled = false, className = "", ariaLabel } = props;
        return (React.createElement("td", null,
            React.createElement("button", { type: "button", className: `hyper-link table-link-button ${disabled ? "hyper-link--disabled" : ""} ${className}`.replace(/\s+/g, " ").trim(), "aria-label": ariaLabel, disabled: disabled, onClick: onClick }, linkText)));
    }
    return (React.createElement("td", null,
        React.createElement(HyperLink, Object.assign({}, props))));
};
