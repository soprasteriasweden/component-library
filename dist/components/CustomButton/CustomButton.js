var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faDownload, faFilePdf, faFileExcel, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as bootstrap from "bootstrap";
export var ButtonType;
(function (ButtonType) {
    ButtonType["create"] = "btn-primary btn-create";
    ButtonType["createAlt"] = "btn-outline-primary btn-create-alt";
    ButtonType["edit"] = "btn-primary btn-edit";
    ButtonType["editAlt"] = "btn-outline-primary btn-edit-alt";
    ButtonType["credit"] = "btn-warning";
    ButtonType["download"] = "btn-primary btn-download";
    ButtonType["pdf"] = "btn-primary btn-pdf";
    ButtonType["excel"] = "btn-primary btn-excel";
    ButtonType["general"] = "btn-outline-dark";
    ButtonType["success"] = "btn-success";
    ButtonType["warning"] = "btn-warning";
    ButtonType["delete"] = "btn-danger";
    ButtonType["deleteAlt"] = "btn-outline-danger";
})(ButtonType || (ButtonType = {}));
export const CustomButton = (props) => {
    const { buttonType, buttonText, isLoading, children, disabled, title = "" } = props, buttonProps = __rest(props, ["buttonType", "buttonText", "isLoading", "children", "disabled", "title"]);
    const tooltipRef = React.useRef(null);
    React.useEffect(() => {
        let tooltip;
        if (tooltipRef.current) {
            tooltip = bootstrap.Tooltip.getInstance(tooltipRef.current) || new bootstrap.Tooltip(tooltipRef.current);
            tooltip.setContent({ '.tooltip-inner': isLoading ? 'Laddar...' : title || '' });
        }
        return () => {
            if (tooltip) {
                tooltip.dispose();
            }
        };
    }, [isLoading, title]);
    const iconMap = {
        [ButtonType.create]: React.createElement(FontAwesomeIcon, { icon: faPlus }),
        [ButtonType.createAlt]: React.createElement(FontAwesomeIcon, { icon: faPlus }),
        [ButtonType.edit]: React.createElement(FontAwesomeIcon, { icon: faPen }),
        [ButtonType.editAlt]: React.createElement(FontAwesomeIcon, { icon: faPen }),
        [ButtonType.download]: React.createElement(FontAwesomeIcon, { icon: faDownload }),
        [ButtonType.pdf]: React.createElement(FontAwesomeIcon, { icon: faFilePdf }),
        [ButtonType.excel]: React.createElement(FontAwesomeIcon, { icon: faFileExcel }),
        [ButtonType.delete]: React.createElement(FontAwesomeIcon, { icon: faTrash }),
        [ButtonType.deleteAlt]: React.createElement(FontAwesomeIcon, { icon: faTrash })
    };
    const renderIcon = (buttonType) => {
        return iconMap[buttonType] || null;
    };
    const defaultTextMap = {
        [ButtonType.editAlt]: "Ändra",
        [ButtonType.delete]: "Ta bort",
        [ButtonType.credit]: "Kreditera",
    };
    const resolvedButtonText = buttonText || defaultTextMap[buttonType] || "";
    return (React.createElement("span", { ref: tooltipRef, className: `d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`, "data-bs-toggle": "tooltip", "data-bs-placement": "right" },
        React.createElement("button", Object.assign({}, buttonProps, { type: "button", className: `btn btn-sm ${buttonType}`, disabled: isLoading || disabled }),
            isLoading && React.createElement("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }),
            renderIcon(buttonType),
            " ",
            resolvedButtonText)));
};
