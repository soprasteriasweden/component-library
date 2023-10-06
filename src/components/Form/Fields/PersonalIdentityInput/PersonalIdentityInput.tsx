import * as React from "react";
import { IFormInputBaseWithValidation } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const PersonalIdentityInput: React.FunctionComponent<IFormInputBaseWithValidation> = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage }) => {

    const { errors, register } = useFormContext();

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? "col-4 col-form-label" : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? "col-8" : ""}>
                <div className="input-group">
                    <input type="text"
                        name={name}
                        id={name}
                        className="form-control form-control-sm "
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        ref={register({ required: required, pattern: /^(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]|6[1-9]|7[0-9]|8[0-9]|9[0-1])[-+]\d{4}$/ })}
                        disabled={disabled} />
                    {
                        tooltipDescription ?
                            <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                            : null
                    }
                </div>
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" &&
                    (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "pattern" && label + " i fel format" : ""}</span>
            </div>
        </div>
    )
}