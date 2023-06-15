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
import { useFormContext } from 'react-hook-form';
export var CustomSubmitButtonType;
(function (CustomSubmitButtonType) {
    CustomSubmitButtonType["default"] = "btn-primary";
    CustomSubmitButtonType["alternative"] = "btn-link";
})(CustomSubmitButtonType || (CustomSubmitButtonType = {}));
export var CustomSubmitButton = function (props) {
    var handleSubmit = useFormContext().handleSubmit;
    var onButtonSubmit = props.onButtonSubmit, buttonType = props.buttonType, isLoading = props.isLoading, children = props.children, disabled = props.disabled, title = props.title, onClick = props.onClick, defaultProps = __rest(props, ["onButtonSubmit", "buttonType", "isLoading", "children", "disabled", "title", "onClick"]);
    var tooltipId = "a" + Math.floor(Math.random() * Math.floor(100000));
    React.useEffect(function () {
        var myWindow = window;
        myWindow.$("#" + tooltipId).tooltip();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "d-inline-block " + (isLoading || disabled ? "cursor-not-allowed" : ""), id: tooltipId, style: { cursor: "not-allowed" }, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": isLoading ? "Laddar..." : title },
            React.createElement("button", __assign({}, defaultProps, { type: "submit", className: "btn btn-sm " + (buttonType ? buttonType : CustomSubmitButtonType.default), onClick: onButtonSubmit ? handleSubmit(onButtonSubmit) : undefined, disabled: isLoading || disabled, style: { pointerEvents: isLoading || disabled ? "none" : "initial" } }), isLoading ?
                React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, " "),
                    " ",
                    children)
                : children))));
};
