import * as React from "react";
import { IHsaIdInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";

export const HsaIdInput: React.FunctionComponent<IHsaIdInput> = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {

    const { register, formState: { errors } } = useFormContext();
    const errorType = getNestedObjectValue(errors, name)?.type;

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
                        {...register(name, { required: required, pattern: /^(?=.{1,31}$)SE\d{10,12}-[A-Z0-9]+$/ })}
                        disabled={disabled} 
                        onChange={ (e) => e.target.value = e.target.value.toUpperCase() }/>
                    {
                        tooltipDescription ?
                            <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                            : null
                    }
                </div>
                <span className="text-danger">{errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")}</span>
                <span className="text-danger">{errorType === "pattern" && label + " i fel format"}</span>
            </div>
        </div>
    )
}