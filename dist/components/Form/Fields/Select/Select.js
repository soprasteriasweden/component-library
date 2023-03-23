import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
export var Select = function (_a) {
    var _b, _c;
    var name = _a.name, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, options = _a.options, requiredValidationMessage = _a.requiredValidationMessage, selectedValue = _a.selectedValue, onChange = _a.onChange, isLoading = _a.isLoading, _d = _a.labelCol, labelCol = _d === void 0 ? 4 : _d, _e = _a.inputCol, inputCol = _e === void 0 ? 8 : _e, isClearable = _a.isClearable;
    var _f = React.useState(selectedValue), currentSelectedValue = _f[0], setCurrentSelectedValue = _f[1];
    var readonlyValues = {
        errors: "",
        register: "",
        unregister: "",
        setValue: ""
    };
    var _g = (_b = useFormContext()) !== null && _b !== void 0 ? _b : readonlyValues, errors = _g.errors, register = _g.register, unregister = _g.unregister, setValue = _g.setValue;
    React.useEffect(function () {
        var _a;
        if (typeof unregister !== "string") {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
            return function () {
                var _a;
                unregister(name);
                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
            };
        }
    }, []);
    var resetValue = function () {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
        }
    };
    React.useEffect(function () {
        setCurrentSelectedValue(selectedValue);
    }, [selectedValue]);
    var handleChange = function (event) {
        setCurrentSelectedValue(event.target.value);
        if (onChange !== undefined) {
            onChange(event.target.value);
        }
    };
    var clearValue = function () {
        setCurrentSelectedValue(undefined);
        if (onChange !== undefined) {
            onChange(undefined);
        }
    };
    var renderSelect = function () {
        return (React.createElement("select", { name: name, id: name, className: "form-control form-control-sm", disabled: disabled, ref: typeof register !== "string" ? register({ required: required }) : "", onChange: handleChange },
            React.createElement("option", { value: "", selected: currentSelectedValue ? false : true, disabled: true, hidden: true }, placeholder),
            options.map(function (option, index) {
                return React.createElement("option", { value: option.value, key: index, selected: currentSelectedValue == option.value, disabled: option.disabled }, option.text);
            })));
    };
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement(InputSpinnerWrapper, { isLoading: isLoading !== null && isLoading !== void 0 ? isLoading : false }, isClearable
                ?
                    React.createElement(ClearableInput, { onClear: clearValue, input: renderSelect() })
                : renderSelect()),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_c = errors[name]) === null || _c === void 0 ? void 0 : _c.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));
};
