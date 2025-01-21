import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useFormContext } from 'react-hook-form';
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { getNestedObjectValue } from "../../../../utils/utils";
export const Checkbox = ({ label, name, tooltipDescription, className, disabled, required, checked, value, requiredValidationMessage, id, labelCol = 4, inputCol = 8, onChange, withColumn }) => {
    var _a;
    const { formState: { errors }, register } = useFormContext();
    const [isChecked, setIsChecked] = React.useState(false);
    React.useEffect(() => {
        if (checked !== undefined) {
            setIsChecked(checked);
        }
        else {
            setIsChecked(false);
        }
    }, [checked]);
    React.useEffect(() => {
        var _a;
        if (!disabled) {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
        }
        return () => {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
        };
    }, []);
    const resetValue = () => {
        setIsChecked(false);
        if (onChange) {
            onChange(false);
        }
    };
    const toggleIsChecked = () => {
        if (isChecked) {
            setIsChecked(false);
            if (onChange) {
                onChange(false);
            }
        }
        else {
            setIsChecked(true);
            if (onChange) {
                onChange(true);
            }
        }
    };
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    return (_jsxs("div", { className: className + " custom-checkbox form-group row", children: [_jsx("label", { className: `col-${labelCol}`, htmlFor: id, children: tooltipDescription ?
                    _jsx(TooltipItem, { title: label, description: tooltipDescription }, id)
                    : _jsxs(_Fragment, { children: [label, withColumn ? ":" : ""] }) }), _jsxs("div", { className: `col-${inputCol}`, children: [_jsx("input", Object.assign({ type: "checkbox", id: id, disabled: disabled, checked: isChecked, value: value }, register(name, { required: required, onChange: () => toggleIsChecked() }))), _jsx("span", { className: "text-danger", children: errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : "Måste kryssas i") })] })] }));
};
