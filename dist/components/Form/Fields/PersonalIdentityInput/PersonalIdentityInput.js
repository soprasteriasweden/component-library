import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
export const PersonalIdentityInput = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {
    var _a;
    const { register, formState: { errors } } = useFormContext();
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [_jsxs("div", { className: "input-group", children: [_jsx("input", Object.assign({ type: "text", id: name, className: "form-control form-control-sm ", placeholder: placeholder, defaultValue: defaultValue }, register(name, { required: required, pattern: /^(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]|6[1-9]|7[0-9]|8[0-9]|9[0-1])[-+]\d{4}$/ }), { disabled: disabled })), tooltipDescription ?
                                _jsx(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                                : null] }), _jsx("span", { className: "text-danger", children: (errorType === "required" || errorType === "validate") && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") }), _jsx("span", { className: "text-danger", children: errorType === "pattern" && label + " i fel format" })] })] }));
};
