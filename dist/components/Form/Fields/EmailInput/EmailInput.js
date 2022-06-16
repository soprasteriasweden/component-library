import * as React from "react";

import { useFormContext } from 'react-hook-form';

export const EmailInput = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage }) => {

    var _a;

    const { errors, register } = useFormContext();

    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },

        React.createElement("label", { className: inlineLabel ? "col-4 col-form-label" : "" },

            label,

            ":",

            required ? "*" : ""),

        React.createElement("div", { className: inlineLabel ? "col-8" : "" },

            React.createElement("input", { type: "email", name: name, id: name, className: "form-control form-control-sm", ref: register({ required: required }), placeholder: placeholder, defaultValue: defaultValue, disabled: disabled }),

            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&

                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));

};

