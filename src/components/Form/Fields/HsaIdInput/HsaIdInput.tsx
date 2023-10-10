import * as React from "react";
import { IHsaIdInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";

export const HsaIdInput: React.FunctionComponent<IHsaIdInput> = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {

    const { errors, register } = useFormContext();
    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <div className="input-group">
                    <input type="text"
                        name={name}
                        id={name}
                        className="form-control form-control-sm "
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        ref={register({ required: required, pattern: /^(?=.{1,31}$)SE\d{10,12}-[a-zA-Z0-9]+$/ })}
                        disabled={disabled} />
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