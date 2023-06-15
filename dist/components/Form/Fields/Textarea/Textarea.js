import * as React from "react";
import { useFormContext } from "react-hook-form";
export var Textarea = function (_a) {
    var _b, _c, _d;
    var name = _a.name, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, rows = _a.rows, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage, maxLength = _a.maxLength, minLength = _a.minLength, _e = _a.labelCol, labelCol = _e === void 0 ? 4 : _e, _f = _a.inputCol, inputCol = _f === void 0 ? 8 : _f, readonly = _a.readonly, onChange = _a.onChange;
    var readonlyValues = {
        errors: "",
        register: "",
        setValue: ""
    };
    var _g = (_b = useFormContext()) !== null && _b !== void 0 ? _b : readonlyValues, errors = _g.errors, register = _g.register, setValue = _g.setValue;
    var _h = React.useState(), displayValue = _h[0], setDisplayValue = _h[1];
    React.useEffect(function () {
        if (defaultValue) {
            if (typeof setValue !== "string") {
                setValue(name, defaultValue);
            }
            setDisplayValue(defaultValue);
        }
    }, [defaultValue]);
    var handleChange = function (event) {
        if (typeof setValue !== "string") {
            setValue(name, event.target.value);
        }
        setDisplayValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-" + labelCol + " col-form-label" : "" },
            label,
            ":",
            required && (readonly === false || readonly === undefined) ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-" + inputCol : "" },
            readonly
                ?
                    React.createElement("div", { id: name, className: "form-control-plaintext", style: { whiteSpace: "pre-line" } }, defaultValue)
                :
                    React.createElement("textarea", { name: name, id: name, rows: rows, className: "form-control form-control-sm ", placeholder: placeholder, onChange: handleChange, ref: typeof register !== "string" ? register({ required: required, validate: required ? function (value) { return !!value.trim(); } : undefined }) : "", disabled: disabled, maxLength: maxLength, minLength: minLength }, displayValue),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && (((_c = errors[name]) === null || _c === void 0 ? void 0 : _c.type) === "required" || ((_d = errors[name]) === null || _d === void 0 ? void 0 : _d.type) === "validate") && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));
};
