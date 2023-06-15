var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
export var CustomButton = function (props) {
    var buttonType = props.buttonType, buttonText = props.buttonText, isLoading = props.isLoading, children = props.children, disabled = props.disabled, title = props.title, defaultProps = __rest(props, ["buttonType", "buttonText", "isLoading", "children", "disabled", "title"]);
    var tooltipId = "a" + Math.floor(Math.random() * Math.floor(100000));
    React.useEffect(function () {
        var myWindow = window;
        myWindow.$("#".concat(tooltipId)).tooltip();
    }, []);
    var renderIcon = function () {
        if (buttonType === ButtonType.create) {
            return React.createElement("span", null,
                " ",
                React.createElement(FontAwesomeIcon, { icon: faPlus }),
                " ");
        }
        else if (buttonType === ButtonType.edit) {
            return React.createElement("span", null,
                " ",
                React.createElement(FontAwesomeIcon, { icon: faPen }),
                " ");
        }
        else if (buttonType === ButtonType.editAlt) {
            return React.createElement("span", null, "\u00C4ndra");
        }
        else if (buttonType === ButtonType.delete) {
            return React.createElement("span", null, "Ta bort");
        }
        else if (buttonType === ButtonType.credit) {
            return React.createElement("span", null, "Kreditera");
        }
        else if (buttonType === ButtonType.download) {
            return React.createElement("span", null,
                " ",
                React.createElement(FontAwesomeIcon, { icon: faDownload }),
                " ");
        }
        else if (buttonType === ButtonType.pdf) {
            return React.createElement("span", null,
                " ",
                React.createElement(FontAwesomeIcon, { icon: faFilePdf }),
                " ");
        }
        else if (buttonType === ButtonType.excel) {
            return React.createElement("span", null,
                " ",
                React.createElement(FontAwesomeIcon, { icon: faFileExcel }),
                " ");
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "d-inline-block ".concat(isLoading || disabled ? "cursor-not-allowed" : ""), id: tooltipId, style: { cursor: "not-allowed" }, "data-toggle": "tooltip", "data-placement": "right", "data-original-title": isLoading ? "Laddar..." : title },
            React.createElement("button", __assign({}, defaultProps, { type: "button", className: "btn btn-sm ".concat(buttonType), disabled: isLoading || disabled, style: { pointerEvents: isLoading || disabled ? "none" : "initial" } }),
                isLoading ?
                    React.createElement("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" })
                    : null,
                renderIcon(),
                buttonText))));
};
