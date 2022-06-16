import * as React from "react";
import { ICheckbox } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import "./Checkbox.style.scss";

export const Checkbox: React.FunctionComponent<ICheckbox> = ({ label, name, className, disabled, required, checked, value, requiredValidationMessage, id, labelCol = 4, inputCol = 8, onChange, withColumn }) => {

    const { errors, register } = useFormContext();
    const [isChecked, setIsChecked] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (checked !== undefined) {
            setIsChecked(checked);
        }
        else {
            setIsChecked(false);
        }
    }, [checked])

    React.useEffect(() => {
        if (!disabled) {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);
        }
        return () => {
            document.getElementById("clear-form")?.removeEventListener("click", resetValue);
        }
    }, []);

    const resetValue = () => {
        setIsChecked(false);
        if (onChange) {
            onChange(false);
        }
    }

    const toggleIsChecked = () => {
        if (isChecked) {
            setIsChecked(false);
            if (onChange) {
                onChange(false);
            }
        }
        else {
            setIsChecked(true);
            if (onChange) {
                onChange(true);
            }
        }
    }

    return (
        <div className={className + " custom-checkbox form-group row"}>
            <label className={`col-${labelCol}`} htmlFor={id}>
                {label}{withColumn ? ":" : ""}
            </label>
            <div className={`col-${inputCol}`}>
                <input type="checkbox"
                    name={name}
                    id={id}
                    disabled={disabled}
                    checked={isChecked}
                    onChange={() => toggleIsChecked()}
                    value={value}
                    ref={register({ required: required })}
                />
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" &&
                    (requiredValidationMessage ? requiredValidationMessage : "Måste kryssas i") : ""}</span>
            </div>
        </div >
    )
}