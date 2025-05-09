import * as React from "react";
import { useFormContext } from "react-hook-form";
import { IBooleanQuestionGroup } from "../../../../models/IFormInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
import "../../../../assets/styles/RadioButton.style.scss";

export const BooleanQuestionGroup: React.FunctionComponent<IBooleanQuestionGroup> = ({
    name,
    label,
    labelExplanation,
    options,
    required,
    requiredValidationMessage,
    tooltipDescription,
    labelCol = 4,
    inputCol = 8,
    inlineLabel
}) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    return (
        <fieldset className="form-group">
            {label && (
                <div className={`form-group ${inlineLabel ? "row" : ""} mb-2`}>
                    <div className={inlineLabel ? `col-${labelCol} d-flex align-items-center gap-1` : "d-flex gap-1 mb-1"}>
                        <label className="mb-0">
                            {label}
                            {required && " *"}
                        </label>
                        {tooltipDescription && (
                            <InputIconTooltip
                                description={tooltipDescription}
                                icon={faQuestionCircle}
                            />
                        )}
                    </div>
                    <div className={inlineLabel ? `col-${inputCol} d-flex align-items-center` : ""}>
                        <span className="form-check-label mb-0">{labelExplanation}</span>
                    </div>
                </div>
            )}

            {options.map((option) => {
                const fieldName = `${name}.${option.value}`;
                const yesId = `${fieldName}.yes`;
                const noId = `${fieldName}.no`;

                const fieldError = getNestedObjectValue(errors, fieldName);

                return (
                    <div className={`form-group ${inlineLabel ? "row" : ""} mb-0`} key={option.value}>
                        <label className={`${inlineLabel ? `col-${labelCol}` : ""} col-form-label d-flex align-items-center gap-1`}>
                            {option.text}{option.text && option.text !== "" ? ":" : ""}{option.required ? "*" : ""}
                            {option.informationText && (
                                <InputIconTooltip
                                    description={option.informationText}
                                    icon={faQuestionCircle}
                                />
                            )}
                        </label>

                        <div className={inlineLabel ? `col-${inputCol}` : ""}>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={yesId}
                                    value="true"
                                    {...register(fieldName, {
                                        required: option.required ? requiredValidationMessage ?? `${option.text} måste besvaras` : false,
                                        setValueAs: v => (v === "true" ? true : v === "false" ? false : undefined)
                                    })}
                                />
                                <label className="form-check-label" htmlFor={yesId}>Ja</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={noId}
                                    value="false"
                                    {...register(fieldName, {
                                        required: option.required ? requiredValidationMessage ?? `${option.text} måste besvaras` : false,
                                        setValueAs: v => (v === "true" ? true : v === "false" ? false : undefined)
                                    })}
                                />
                                <label className="form-check-label" htmlFor={noId}>Nej</label>
                            </div>

                            {fieldError && (
                                <div className="text-danger">{fieldError.message}</div>
                            )}
                        </div>
                    </div>
                );
            })}
        </fieldset>
    );
};
