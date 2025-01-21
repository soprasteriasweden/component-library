import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
export const HsaIdInput = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {
    var _a;
    const { register, formState: { errors } } = useFormContext();
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [_jsxs("div", { className: "input-group", children: [_jsx("input", Object.assign({ type: "text", id: name, className: "form-control form-control-sm ", placeholder: placeholder, defaultValue: defaultValue }, register(name, { required: required, pattern: /^(?=.{1,31}$)SE\d{10,12}-[A-Z0-9]+$/ }), { disabled: disabled, onChange: (e) => e.target.value = e.target.value.toUpperCase() })), tooltipDescription ?
                                _jsx(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                                : null] }), _jsx("span", { className: "text-danger", children: errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") }), _jsx("span", { className: "text-danger", children: errorType === "pattern" && label + " i fel format" })] })] }));
};
