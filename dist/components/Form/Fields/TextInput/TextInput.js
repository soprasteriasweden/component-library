import * as React from "react";

import { useFormContext } from 'react-hook-form';

export const TextInput = ({ label, name, className, disabled, inlineLabel, required, placeholder, defaultValue, requiredValidationMessage, readonly, minLength, maxLength, pattern, patternValidationMessage, labelCol = 4, inputCol = 8 }) => {

    var _a, _b, _c, _d;

    const readonlyValues = {

        errors: "",

        register: "",

        setValue: ""

    };

    const { errors, register, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;

    React.useEffect(() => {

        var _a;

        if (typeof setValue !== "string") {

            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);

            return () => {

                var _a;

                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);

            };

        }

    }, []);

    const resetValue = () => {

        if (typeof setValue !== "string") {

            setValue(name, undefined);

        }

    };

    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },

        React.createElement("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "" },

            label,

            ":",

            required && (readonly === false || readonly === undefined) ? "*" : ""),

        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },

            readonly

                ?

                    React.createElement("p", { id: name, className: "form-control-plaintext" }, defaultValue)

                :

                    React.createElement("input", { type: "text", name: name, id: name, className: "form-control form-control-sm", ref: typeof register !== "string" ? register({ required: required, pattern: pattern, validate: required ? (value) => { return !!value.trim(); } : undefined }) : "", placeholder: placeholder, defaultValue: defaultValue, disabled: disabled, minLength: minLength, maxLength: maxLength }),

            React.createElement("span", { className: "text-danger" }, errors ? [name] && (((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" || ((_c = errors[name]) === null || _c === void 0 ? void 0 : _c.type) === "validate") &&

                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""),

            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_d = errors[name]) === null || _d === void 0 ? void 0 : _d.type) === "pattern" &&

                (patternValidationMessage ? patternValidationMessage : label + " i fel format") : ""))));

};

