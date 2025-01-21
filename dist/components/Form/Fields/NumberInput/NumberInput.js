import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
export const NumberInput = ({ name, label, required, className, inlineLabel, disabled, placeholder, maxValue, minValue, defaultValue, requiredValidationMessage, maxLength, minLength, readonly, labelCol = 4, inputCol = 8 }) => {
    var _a;
    const { formState: { errors }, register } = useFormContext();
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required && (readonly === false || readonly === undefined) ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [readonly
                        ?
                            _jsx("input", Object.assign({ type: "number", readOnly: true, id: name, className: "form-control-plaintext " }, register(name), { value: defaultValue }))
                        :
                            _jsx("input", Object.assign({ type: "number", min: minValue, max: maxValue, id: name, className: "form-control form-control-sm ", placeholder: placeholder }, register(name, { required }), { defaultValue: defaultValue, disabled: disabled, minLength: minLength, maxLength: maxLength })), _jsx("span", { className: "text-danger", children: ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" ?
                            (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : "" })] })] }));
};
