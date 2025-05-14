import * as React from "react";
import { IPhoneNumberInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const PhoneNumberInput: React.FunctionComponent<IPhoneNumberInput> = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8, readonly  }) => {

    const readonlyValues = { errors: "", register: "" };
    const { errors, register } = useFormContext() ?? readonlyValues;
    const errorType = (errors as any)?.[name]?.type;

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>
                {label}
                {label ? ":" : ""}
                {required && (readonly === false || readonly === undefined) ? "*" : ""}
            </label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <div className="input-group">
                    {readonly ? (
                        <p id={name} className="form-control-plaintext">{defaultValue}</p>
                    ) : (
                        <>
                            <input
                                type="text"
                                name={name}
                                id={name}
                                className="form-control form-control-sm"
                                placeholder={placeholder}
                                defaultValue={defaultValue}
                                ref={register({
                                    required,
                                    pattern: /^(\+46|0)[\s\-]?(\d{1,4})[\s\-]?(\d{2,4})[\s\-]?(\d{2,4})$/
                                })}
                                disabled={disabled}
                            />
                            {tooltipDescription && (
                                <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                            )}
                        </>
                    )}
                </div>
                {readonly ? null : (
                    <>
                        <span className="text-danger">
                            {(errorType === "required") &&
                                (requiredValidationMessage || `${label} måste anges`)}
                        </span>
                        <span className="text-danger">
                            {(errorType === "pattern") && `${label} i fel format`}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};