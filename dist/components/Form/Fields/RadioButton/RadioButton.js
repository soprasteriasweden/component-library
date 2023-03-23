import * as React from "react";
import { useFormContext } from 'react-hook-form';
import "./RadioButton.style.scss";
export var RadioButton = function (_a) {
    var required = _a.required, inlineLabel = _a.inlineLabel, name = _a.name, value = _a.value, label = _a.label, id = _a.id;
    var register = useFormContext().register;
    return (React.createElement("div", { className: "custom-radio-button form-check ".concat(inlineLabel ? "form-check-inline" : "") },
        React.createElement("input", { className: "form-check-input", type: "radio", name: name, ref: register({ required: required }), id: id, value: value, required: required }),
        React.createElement("label", { className: "form-check-label", htmlFor: id }, label)));
};
