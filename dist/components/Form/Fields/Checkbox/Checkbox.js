import * as React from "react";
import { useFormContext } from "react-hook-form";
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { getNestedObjectValue } from "../../../../utils/utils";
export const Checkbox = ({ label, name, tooltipDescription, className = "", disabled, required, checked, value, requiredValidationMessage, id, onChange, withColumn }) => {
    var _a, _b, _c, _d;
    const readonlyValues = {
        formState: { errors: {} },
        register: "",
        watch: "",
        setValue: ""
    };
    const { formState: { errors }, register, watch, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;
    // Fall back to the field name so the label's htmlFor always points at the input
    const inputId = id !== null && id !== void 0 ? id : name;
    const isChecked = (_c = (_b = (typeof watch !== "string" ? watch(name) : undefined)) !== null && _b !== void 0 ? _b : checked) !== null && _c !== void 0 ? _c : false;
    const handleChange = (e) => {
        const newValue = e.target.checked;
        if (typeof setValue !== "string") {
            setValue(name, newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    const errorType = (_d = getNestedObjectValue(errors, name)) === null || _d === void 0 ? void 0 : _d.type;
    return (React.createElement("div", { className: `form-group ${className}` },
        React.createElement("div", { className: "form-check d-flex align-items-center gap-2 mb-0 ps-0" },
            React.createElement("label", { className: "col-form-label p-0", htmlFor: inputId }, tooltipDescription ? (React.createElement(TooltipItem, { key: inputId, title: label, description: tooltipDescription })) : (React.createElement(React.Fragment, null,
                label,
                withColumn ? ":" : ""))),
            React.createElement("input", Object.assign({ type: "checkbox", className: "form-check-input m-0 float-none", id: inputId, disabled: disabled, value: value, checked: isChecked }, (typeof register !== "string"
                ? register(name, { required, onChange: handleChange })
                : { name, onChange: handleChange }))),
            React.createElement("span", { className: "text-danger" }, errorType === "required" && (requiredValidationMessage || "Måste kryssas i")))));
};
