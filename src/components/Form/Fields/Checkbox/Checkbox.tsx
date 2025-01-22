import * as React from "react";
import { ICheckbox } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { getNestedObjectValue } from "../../../../utils/utils";

export const Checkbox: React.FunctionComponent<ICheckbox> = ({ label, name, tooltipDescription, className, disabled, required, checked, value, requiredValidationMessage, id, labelCol = 4, inputCol = 8, onChange, withColumn }) => {
    const readonlyValues = {
        errors: "",
        register: "",
        unregister: "",
        setValue: ""
    }
    const { formState: { errors }, register } = useFormContext() ?? readonlyValues;
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

    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className={className + " custom-checkbox form-group row"}>
            <label className={`col-${labelCol}`} htmlFor={id}>
                {
                    tooltipDescription ?
                        <TooltipItem key={id} title={label} description={tooltipDescription} />
                        : <>{ label }{withColumn ? ":" : ""}</>
                }
            </label>
            <div className={`col-${inputCol}`}>
                <input type="checkbox"
                    id={id}
                    disabled={disabled}
                    checked={isChecked}
                    value={value}
                    {...register(id, { name: name, required: required, onChange: () => toggleIsChecked() })}
                />
                <span className="text-danger">{errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : "Måste kryssas i")}</span>
            </div>
        </div >
    )
}