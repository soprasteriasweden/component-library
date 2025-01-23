import * as React from "react";
import { useFormContext } from 'react-hook-form';
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { getNestedObjectValue } from "../../../../utils/utils";
export const Checkbox = ({ label, name, tooltipDescription, className, disabled, required, checked, value, requiredValidationMessage, id, labelCol = 4, inputCol = 8, onChange, withColumn }) => {
    var _a, _b;
    const readonlyValues = {
        errors: "",
        register: "",
        unregister: "",
        setValue: ""
    };
    const { formState: { errors }, register } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;
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
    const errorType = (_b = getNestedObjectValue(errors, name)) === null || _b === void 0 ? void 0 : _b.type;
    return (React.createElement("div", { className: className + " custom-checkbox form-group row" },
        React.createElement("label", { className: `col-${labelCol}`, htmlFor: id }, tooltipDescription ?
            React.createElement(TooltipItem, { key: id, title: label, description: tooltipDescription })
            : React.createElement(React.Fragment, null,
                label,
                withColumn ? ":" : "")),
        React.createElement("div", { className: `col-${inputCol}` },
            React.createElement("input", Object.assign({ type: "checkbox", id: id, disabled: disabled, value: value, checked: isChecked }, register(name, { required: required, onChange: () => toggleIsChecked() }))),
            React.createElement("span", { className: "text-danger" }, errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : "Måste kryssas i")))));
};
