import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useFormContext } from "react-hook-form";
export const Textarea = ({ name, label, required, className, inlineLabel, disabled, placeholder, rows, defaultValue, requiredValidationMessage, maxLength, minLength, labelCol = 4, inputCol = 8, readonly, onChange }) => {
    var _a, _b, _c;
    const readonlyValues = {
        errors: "",
        register: "",
        setValue: ""
    };
    const { formState: { errors }, register, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;
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
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required && (readonly === false || readonly === undefined) ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [readonly
                        ?
                            _jsx("div", { id: name, className: "form-control-plaintext", style: { whiteSpace: "pre-line" }, children: defaultValue })
                        :
                            _jsx("textarea", Object.assign({ id: name, rows: rows, className: "form-control form-control-sm ", placeholder: placeholder }, register(name, {
                                required: required,
                                validate: required ? (value) => !!value.trim() : undefined,
                                onChange: handleChange
                            }), { disabled: disabled, maxLength: maxLength, minLength: minLength, children: displayValue })), _jsx("span", { className: "text-danger", children: errors[name] && (((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" || ((_c = errors[name]) === null || _c === void 0 ? void 0 : _c.type) === "validate") && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") })] })] }));
};
