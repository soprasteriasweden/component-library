import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
export const Select = ({ name, label, required, className, inlineLabel, disabled, placeholder, options, requiredValidationMessage, selectedValue, onChange, isLoading, tooltipDescription, labelCol = 4, inputCol = 8, isClearable }) => {
    var _a, _b;
    const [currentSelectedValue, setCurrentSelectedValue] = React.useState(selectedValue);
    const readonlyValues = {
        errors: "",
        register: "",
        unregister: "",
        setValue: ""
    };
    const { formState: { errors }, register, unregister, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;
    React.useEffect(() => {
        var _a, _b;
        if (typeof unregister !== "string") {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
            if (!disabled && options && (isClearable || options.length > 1)) {
                (_b = document.getElementById("clear-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", resetValue);
            }
            return () => {
                var _a;
                unregister(name);
                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
            };
        }
    }, [options]);
    React.useEffect(() => {
        setCurrentSelectedValue(selectedValue !== null && selectedValue !== void 0 ? selectedValue : undefined);
    }, [selectedValue]);
    const resetValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
            setCurrentSelectedValue(undefined);
        }
    };
    const clearValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
            setCurrentSelectedValue(undefined);
        }
        if (onChange) {
            onChange(undefined);
        }
    };
    const handleChange = (event) => {
        setCurrentSelectedValue(event.target.value);
        if (onChange !== undefined) {
            onChange(event.target.value);
        }
    };
    const renderSelect = () => {
        return (React.createElement("div", { className: "input-group" },
            React.createElement("select", Object.assign({ id: name, className: "form-control form-control-sm", value: currentSelectedValue, disabled: disabled }, (typeof register !== "string" ? register(name, { required }) : {}), { onChange: handleChange }),
                React.createElement("option", { value: undefined, disabled: true, hidden: true }, placeholder),
                options.map((option, index) => (React.createElement("option", { value: option.value, key: index, disabled: option.disabled }, option.text)))),
            tooltipDescription ? (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })) : null));
    };
    const errorType = (_b = getNestedObjectValue(errors, name)) === null || _b === void 0 ? void 0 : _b.type;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement(InputSpinnerWrapper, { isLoading: isLoading !== null && isLoading !== void 0 ? isLoading : false }, isClearable
                ? React.createElement(ClearableInput, { onClear: clearValue, input: renderSelect() })
                : renderSelect()),
            React.createElement("span", { className: "text-danger" }, errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")))));
};
