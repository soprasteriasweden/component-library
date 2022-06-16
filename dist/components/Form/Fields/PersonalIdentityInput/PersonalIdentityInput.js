import * as React from "react";

import { useFormContext } from 'react-hook-form';

export const PersonalIdentityInput = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage }) => {

    var _a, _b;

    const { errors, register } = useFormContext();

    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },

        React.createElement("label", { className: inlineLabel ? "col-4 col-form-label" : "" },

            label,

            ":",

            required ? "*" : ""),

        React.createElement("div", { className: inlineLabel ? "col-8" : "" },

            React.createElement("input", { type: "text", name: name, id: name, className: "form-control form-control-sm ", placeholder: placeholder, defaultValue: defaultValue, ref: register({ required: required, pattern: /^(19|20)?[0-9]{6}[-]?[0-9]{4}$/ }), disabled: disabled }),

            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&

                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""),

            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "pattern" && label + " i fel format" : ""))));

};

