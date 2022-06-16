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

export const CustomSubmitButton = (props) => {

    const { handleSubmit } = useFormContext();

    const { onButtonSubmit, buttonType, isLoading, children, disabled, title, onClick } = props, defaultProps = __rest(props, ["onButtonSubmit", "buttonType", "isLoading", "children", "disabled", "title", "onClick"]);

    const tooltipId = "a" + Math.floor(Math.random() * Math.floor(100000));

    React.useEffect(() => {

        var myWindow = window;

        myWindow.$(`#${tooltipId}`).tooltip();

    }, []);

    return (React.createElement(React.Fragment, null,

        React.createElement("span", { className: `d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`, id: tooltipId, style: { cursor: "not-allowed" }, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": isLoading ? "Laddar..." : title },

            React.createElement("button", Object.assign({}, defaultProps, { type: "submit", className: `btn btn-sm ${buttonType ? buttonType : CustomSubmitButtonType.default}`, onClick: onButtonSubmit ? handleSubmit(onButtonSubmit) : undefined, disabled: isLoading || disabled, style: { pointerEvents: isLoading || disabled ? "none" : "initial" } }), isLoading ?

                React.createElement(React.Fragment, null,

                    React.createElement("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, " "),

                    " ",

                    children)

                : children))));

};

