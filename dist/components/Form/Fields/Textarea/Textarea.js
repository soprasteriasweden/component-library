import * as React from "react";

import { useFormContext } from "react-hook-form";

export const Textarea = ({ name, label, required, className, inlineLabel, disabled, placeholder, rows, defaultValue, requiredValidationMessage, maxLength, minLength, labelCol = 4, inputCol = 8, readonly, onChange }) => {

    var _a, _b, _c;

    const readonlyValues = {

        errors: "",

        register: "",

        setValue: ""

    };

    const { errors, register, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;

    const [displayValue, setDisplayValue] = React.useState();

    React.useEffect(() => {

        if (defaultValue) {

            if (typeof setValue !== "string") {

                setValue(name, defaultValue);

            }

            setDisplayValue(defaultValue);

        }

    }, [defaultValue]);

    const handleChange = (event) => {

        if (typeof setValue !== "string") {

            setValue(name, event.target.value);

        }

        setDisplayValue(event.target.value);

        if (onChange) {

            onChange(event.target.value);

        }

    };

    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },

        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },

            label,

            ":",

            required && (readonly === false || readonly === undefined) ? "*" : ""),

        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },

            readonly

                ?

                    React.createElement("div", { id: name, className: "form-control-plaintext", style: { whiteSpace: "pre-line" } }, defaultValue)

                :

                    React.createElement("textarea", { name: name, id: name, rows: rows, className: "form-control form-control-sm ", placeholder: placeholder, onChange: handleChange, ref: typeof register !== "string" ? register({ required: required, validate: required ? (value) => { return !!value.trim(); } : undefined }) : "", disabled: disabled, maxLength: maxLength, minLength: minLength }, displayValue),

            React.createElement("span", { className: "text-danger" }, errors ? [name] && (((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" || ((_c = errors[name]) === null || _c === void 0 ? void 0 : _c.type) === "validate") && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));

};

