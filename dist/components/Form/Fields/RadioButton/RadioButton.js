import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
import "../../../../assets/styles/RadioButton.style.scss";
export const RadioButton = ({ required, inlineLabel, name, value, label, id }) => {
    const { register } = useFormContext();
    return (_jsxs("div", { className: `custom-radio-button form-check ${inlineLabel ? "form-check-inline" : ""}`, children: [_jsx("input", Object.assign({ className: "form-check-input", type: "radio" }, register(name, { required: required }), { id: id, value: value, required: required })), _jsx("label", { className: "form-check-label", htmlFor: id, children: label })] }));
};
