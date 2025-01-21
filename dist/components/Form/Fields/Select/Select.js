import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
export const Select = ({ name, label, required, className, inlineLabel, disabled, placeholder, options, requiredValidationMessage, selectedValue, onChange, isLoading, tooltipDescription, labelCol = 4, inputCol = 8, isClearable }) => {
    var _a;
    const [currentSelectedValue, setCurrentSelectedValue] = React.useState(selectedValue);
    const readonlyValues = {
        errors: "",
        register: "",
        unregister: "",
        setValue: ""
    };
    const { formState: { errors }, register, unregister, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;
    React.useEffect(() => {
        var _a;
        if (typeof unregister !== "string") {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
            return () => {
                var _a;
                unregister(name);
                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
            };
        }
    }, []);
    const resetValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
        }
    };
    React.useEffect(() => {
        setCurrentSelectedValue(selectedValue);
    }, [selectedValue]);
    const handleChange = (event) => {
        setCurrentSelectedValue(event.target.value);
        if (onChange !== undefined) {
            onChange(event.target.value);
        }
    };
    const clearValue = () => {
        setCurrentSelectedValue(undefined);
        if (onChange !== undefined) {
            onChange(undefined);
        }
    };
    const renderSelect = () => {
        return (_jsxs("div", { className: "input-group", children: [_jsxs("select", Object.assign({ id: name, className: "form-control form-control-sm", disabled: disabled }, (typeof register !== "string" ? register(name, { required: required }) : {}), { onChange: handleChange, children: [_jsx("option", { value: "", selected: currentSelectedValue ? false : true, disabled: true, hidden: true, children: placeholder }), options.map((option, index) => {
                            return _jsx("option", { value: option.value, selected: currentSelectedValue == option.value, disabled: option.disabled, children: option.text }, index);
                        })] })), tooltipDescription ?
                    _jsx(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                    : null] }));
    };
    const getErrorMessage = () => {
        let error = errors;
        const keys = name.split('.');
        for (let key of keys) {
            if (error && error[key]) {
                error = error[key];
            }
            else {
                return null;
            }
        }
        if ((error === null || error === void 0 ? void 0 : error.type) === "required") {
            return requiredValidationMessage ? requiredValidationMessage : `${label} måste anges`;
        }
        return null;
    };
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [_jsx(InputSpinnerWrapper, { isLoading: isLoading !== null && isLoading !== void 0 ? isLoading : false, children: isClearable
                            ?
                                _jsx(ClearableInput, { onClear: clearValue, input: renderSelect() })
                            : renderSelect() }), _jsx("span", { className: "text-danger", children: getErrorMessage() })] })] }));
};
