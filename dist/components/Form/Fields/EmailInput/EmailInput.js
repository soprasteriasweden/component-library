import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
export const EmailInput = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {
    var _a;
    const { register, formState: { errors } } = useFormContext();
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [_jsx("input", Object.assign({ type: "email", id: name, className: "form-control form-control-sm" }, register(name, { required: required }), { placeholder: placeholder, defaultValue: defaultValue, disabled: disabled })), _jsx("span", { className: "text-danger", children: errors[name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&
                            (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") })] })] }));
};
