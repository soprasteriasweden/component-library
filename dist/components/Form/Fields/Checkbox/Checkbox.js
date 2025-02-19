import * as React from "react";
import { useFormContext } from "react-hook-form";
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { getNestedObjectValue } from "../../../../utils/utils";
export const Checkbox = ({ label, name, tooltipDescription, className = "", disabled, required, checked, value, requiredValidationMessage, id, labelCol = 4, inputCol = 8, onChange, withColumn }) => {
    var _a, _b, _c, _d;
    const { formState: { errors }, register, watch, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : { errors: "" };
    // ✅ Get the current checkbox state from react-hook-form
    const isChecked = (_c = (_b = watch(name)) !== null && _b !== void 0 ? _b : checked) !== null && _c !== void 0 ? _c : false;
    const handleChange = (e) => {
        const newValue = e.target.checked;
        setValue(name, newValue); // ✅ Update react-hook-form state
        if (onChange) {
            onChange(newValue); // ✅ Call external `onChange` if provided
        }
    };
    const errorType = (_d = getNestedObjectValue(errors, name)) === null || _d === void 0 ? void 0 : _d.type;
    return (React.createElement("div", { className: `form-group ${className}` },
        React.createElement("div", { className: "row" },
            React.createElement("label", { className: `col-md-${labelCol} col-form-label`, htmlFor: id }, tooltipDescription ? (React.createElement(TooltipItem, { key: id, title: label, description: tooltipDescription })) : (React.createElement(React.Fragment, null,
                label,
                " ",
                withColumn ? ":" : ""))),
            React.createElement("div", { className: `col-md-${inputCol}` },
                React.createElement("div", { className: "form-check" },
                    React.createElement("input", Object.assign({ type: "checkbox", className: "form-check-input", id: id, disabled: disabled, value: value, checked: isChecked }, register(name, { required, onChange: handleChange }))),
                    React.createElement("span", { className: "text-danger" }, errorType === "required" && (requiredValidationMessage || "Måste kryssas i")))))));
};
