import * as React from "react";
import { INumberInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';

export const NumberInput: React.FunctionComponent<INumberInput> = ({ name, label, required, className, inlineLabel, disabled, placeholder, maxValue, minValue, defaultValue, requiredValidationMessage, maxLength, minLength, readonly, labelCol = 4, inputCol = 8 }) => {

    const { errors, register } = useFormContext();

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required && (readonly === false || readonly === undefined) ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>

                {
                    readonly
                        ?
                        <input type="number"
                        readOnly
                        name={name}
                        id={name}
                        className="form-control-plaintext "
                        ref={register()}
                        value={defaultValue}
                    />
                        :
                        <input type="number"
                            min={minValue}
                            max={maxValue}
                            name={name}
                            id={name}
                            className="form-control form-control-sm "
                            placeholder={placeholder}
                            ref={register({ required: required })}
                            defaultValue={defaultValue}
                            disabled={disabled}
                            minLength={minLength}
                            maxLength={maxLength}
                        />
                }


                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" &&
                    (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>
            </div>
        </div>
    )
}