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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faDownload, faFilePdf, faFileExcel } from '@fortawesome/free-solid-svg-icons';
export var ButtonType;
(function (ButtonType) {
    ButtonType["create"] = "btn-link";
    ButtonType["createAlt"] = "btn-success";
    ButtonType["edit"] = "btn-link ";
    ButtonType["editAlt"] = " ";
    ButtonType["credit"] = "btn-warning ";
    ButtonType["download"] = " btn-link ";
    ButtonType["pdf"] = "btn-link pdf";
    ButtonType["excel"] = "btn-link excel";
    ButtonType["general"] = "";
    ButtonType["success"] = "btn-success";
    ButtonType["warning"] = "btn-warning";
    ButtonType["delete"] = "btn-danger";
    ButtonType["deleteAlt"] = "btn-danger ";
})(ButtonType || (ButtonType = {}));
export const CustomButton = (props) => {
    const { buttonType, buttonText, isLoading, children, disabled, title } = props, defaultProps = __rest(props, ["buttonType", "buttonText", "isLoading", "children", "disabled", "title"]);
    const tooltipId = "a" + Math.floor(Math.random() * Math.floor(100000));
    React.useEffect(() => {
        var myWindow = window;
        myWindow.$(`#${tooltipId}`).tooltip();
    }, []);
    const renderIcon = () => {
        if (buttonType === ButtonType.create) {
            return _jsxs("span", { children: [" ", _jsx(FontAwesomeIcon, { icon: faPlus }), " "] });
        }
        else if (buttonType === ButtonType.edit) {
            return _jsxs("span", { children: [" ", _jsx(FontAwesomeIcon, { icon: faPen }), " "] });
        }
        else if (buttonType === ButtonType.download) {
            return _jsxs("span", { children: [" ", _jsx(FontAwesomeIcon, { icon: faDownload }), " "] });
        }
        else if (buttonType === ButtonType.pdf) {
            return _jsxs("span", { children: [" ", _jsx(FontAwesomeIcon, { icon: faFilePdf }), " "] });
        }
        else if (buttonType === ButtonType.excel) {
            return _jsxs("span", { children: [" ", _jsx(FontAwesomeIcon, { icon: faFileExcel }), " "] });
        }
    };
    const getButtonText = () => {
        if (buttonText && buttonText !== "") {
            return buttonText;
        }
        else {
            if (buttonType === ButtonType.editAlt) {
                return "Ändra";
            }
            else if (buttonType === ButtonType.delete) {
                return "Ta bort";
            }
            else if (buttonType === ButtonType.credit) {
                return "Kreditera";
            }
        }
    };
    return (_jsx(_Fragment, { children: _jsx("span", { className: `d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`, id: tooltipId, style: { cursor: "not-allowed" }, "data-toggle": "tooltip", "data-placement": "right", "data-original-title": isLoading ? "Laddar..." : title, children: _jsxs("button", Object.assign({}, defaultProps, { type: "button", className: `btn btn-sm ${buttonType}`, disabled: isLoading || disabled, style: { pointerEvents: isLoading || disabled ? "none" : "initial" }, children: [isLoading ?
                        _jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" })
                        : null, renderIcon(), getButtonText()] })) }) }));
};
