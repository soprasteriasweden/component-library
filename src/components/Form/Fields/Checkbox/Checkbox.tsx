import * as React from "react";
import { ICheckbox } from "../../../../models/IFormInput";
import { useFormContext } from "react-hook-form";
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { getNestedObjectValue } from "../../../../utils/utils";

export const Checkbox: React.FunctionComponent<ICheckbox> = ({
    label,
    name,
    tooltipDescription,
    className = "",
    disabled,
    required,
    checked,
    value,
    requiredValidationMessage,
    id,
    labelCol = 4,
    inputCol = 8,
    onChange,
    withColumn
}) => {
    const readonlyValues = {
        formState: { errors: {} },
        register: "",
        watch: "",
        setValue: ""
    }

    const {
        formState: { errors },
        register,
        watch,
        setValue
    } = useFormContext() ?? readonlyValues;

    const isChecked = (typeof watch !== "string" ? watch(name) : undefined) ?? checked ?? false;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        if (typeof setValue !== "string") {
            setValue(name, newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };

    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className={`form-group ${className}`}>
            <div className="row align-items-center">
                <label className={`col-md-${labelCol} col-form-label`} htmlFor={id}>
                    {tooltipDescription ? (
                        <TooltipItem key={id} title={label} description={tooltipDescription} />
                    ) : (
                        <>
                            {label}{withColumn ? ":" : ""}
                        </>
                    )}
                </label>
                <div className={`col-md-${inputCol}`}>
                    <div className="form-check d-flex align-items-center gap-2 mb-0 ps-0">
                        <input
                            type="checkbox"
                            className="form-check-input m-0 float-none"
                            id={id}
                            disabled={disabled}
                            value={value}
                            checked={isChecked}
                            {...(typeof register !== "string"
                                ? register(name, { required, onChange: handleChange })
                                : { name, onChange: handleChange })}
                        />
                        <span className="text-danger">
                            {errorType === "required" && (requiredValidationMessage || "Måste kryssas i")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};