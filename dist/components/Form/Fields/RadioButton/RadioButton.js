import * as React from "react";

import { useFormContext } from 'react-hook-form';

import "./RadioButton.style.scss";

export const RadioButton = ({ required, inlineLabel, name, value, label, id }) => {

    const { register } = useFormContext();

    return (React.createElement("div", { className: `custom-radio-button form-check ${inlineLabel ? "form-check-inline" : ""}` },

        React.createElement("input", { className: "form-check-input", type: "radio", name: name, ref: register({ required: required }), id: id, value: value, required: required }),

        React.createElement("label", { className: "form-check-label", htmlFor: id }, label)));

};

