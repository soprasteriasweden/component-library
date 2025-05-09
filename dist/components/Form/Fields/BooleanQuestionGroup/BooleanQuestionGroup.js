import * as React from "react";
import { useFormContext } from "react-hook-form";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
import "../../../../assets/styles/RadioButton.style.scss";
export const BooleanQuestionGroup = ({ name, label, labelExplanation, options, required, requiredValidationMessage, tooltipDescription, labelCol = 4, inputCol = 8, inlineLabel }) => {
    const { register, formState: { errors } } = useFormContext();
    return (React.createElement("fieldset", { className: "form-group" },
        label && (React.createElement("div", { className: `form-group ${inlineLabel ? "row" : ""} mb-2` },
            React.createElement("div", { className: inlineLabel ? `col-${labelCol} d-flex align-items-center gap-1` : "d-flex gap-1 mb-1" },
                React.createElement("label", { className: "mb-0" },
                    label,
                    required && " *"),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))),
            React.createElement("div", { className: inlineLabel ? `col-${inputCol} d-flex align-items-center` : "" },
                React.createElement("span", { className: "form-check-label mb-0" }, labelExplanation)))),
        options.map((option) => {
            const fieldName = `${name}.${option.value}`;
            const yesId = `${fieldName}.yes`;
            const noId = `${fieldName}.no`;
            const fieldError = getNestedObjectValue(errors, fieldName);
            return (React.createElement("div", { className: `form-group ${inlineLabel ? "row" : ""} mb-0`, key: option.value },
                React.createElement("label", { className: `${inlineLabel ? `col-${labelCol}` : ""} col-form-label d-flex align-items-center gap-1` },
                    option.text,
                    option.text && option.text !== "" ? ":" : "",
                    option.required ? "*" : "",
                    option.informationText && (React.createElement(InputIconTooltip, { description: option.informationText, icon: faQuestionCircle }))),
                React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
                    React.createElement("div", { className: "form-check form-check-inline" },
                        React.createElement("input", Object.assign({ className: "form-check-input", type: "radio", id: yesId, value: "true" }, register(fieldName, {
                            required: option.required ? requiredValidationMessage !== null && requiredValidationMessage !== void 0 ? requiredValidationMessage : `${option.text} måste besvaras` : false,
                            setValueAs: v => (v === "true" ? true : v === "false" ? false : undefined)
                        }))),
                        React.createElement("label", { className: "form-check-label", htmlFor: yesId }, "Ja")),
                    React.createElement("div", { className: "form-check form-check-inline" },
                        React.createElement("input", Object.assign({ className: "form-check-input", type: "radio", id: noId, value: "false" }, register(fieldName, {
                            required: option.required ? requiredValidationMessage !== null && requiredValidationMessage !== void 0 ? requiredValidationMessage : `${option.text} måste besvaras` : false,
                            setValueAs: v => (v === "true" ? true : v === "false" ? false : undefined)
                        }))),
                        React.createElement("label", { className: "form-check-label", htmlFor: noId }, "Nej")),
                    fieldError && (React.createElement("div", { className: "text-danger" }, fieldError.message)))));
        })));
};
