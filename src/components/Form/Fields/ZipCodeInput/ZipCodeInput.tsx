import * as React from "react";
import { IZipCodeInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const ZipCodeInput: React.FunctionComponent<IZipCodeInput> = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <div className="input-group">
                    <input type="text"
                        id={name}
                        className="form-control form-control-sm "
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        {...register(name, { required: required, pattern: /^[0-9]{5}$/ })}
                        disabled={disabled} />
                    {
                        tooltipDescription ?
                            <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                            : null
                    }
                </div>
                <span className="text-danger">{errors[name]?.type === "required" &&
                    (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")}</span>
                <span className="text-danger">{errors[name]?.type === "pattern" && label + " i fel format"}</span>
            </div>
        </div>
    )
}