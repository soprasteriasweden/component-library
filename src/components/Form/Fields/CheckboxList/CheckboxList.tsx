import * as React from "react";
import { useFormContext } from "react-hook-form";
import { ICheckboxList, ICheckbox } from "../../../../models/IFormInput";
import "../../../../assets/styles/CheckboxList.style.scss";

export const CheckboxList: React.FunctionComponent<ICheckboxList> = ({
    initialCheckboxes,
    toggleAll,
    toggleAllLabel = "Välj alla",
    name,
    inputCol = 8,
    labelCol = 4,
}) => {
    const { watch, setValue } = useFormContext();

    let selectedValues: string[] = watch(name) || [];
    if (!Array.isArray(selectedValues)) {
        selectedValues = [];
    }

    const toggleSingleCheckbox = (checkboxValue: string) => {
        const isAlreadyChecked = selectedValues.includes(checkboxValue);
        const updatedValues = isAlreadyChecked
            ? selectedValues.filter(val => val !== checkboxValue)
            : [...selectedValues, checkboxValue];

        setValue(name, updatedValues);
    };

    const toggleAllCheckboxes = () => {
        if (selectedValues.length === initialCheckboxes.length) {
            setValue(name, []);
        } else {
            const allValues = initialCheckboxes.map((cb: ICheckbox) => cb.value);
            setValue(name, allValues);
        }
    };

    return (
        <fieldset className="checkbox-list">
            {toggleAll && (
                <div className="form-group row checkbox-item mb-2">
                    <label
                        className={`col-${labelCol} col-form-label`}
                        htmlFor={`${name}-toggleAll`}
                    >
                        {toggleAllLabel}
                    </label>
                    <div className={`col-${inputCol}`}>
                        <input
                            type="checkbox"
                            id={`${name}-toggleAll`}
                            checked={selectedValues.length === initialCheckboxes.length}
                            onChange={toggleAllCheckboxes}
                        />
                    </div>
                </div>
            )}

            {initialCheckboxes.map((checkbox: ICheckbox) => {
                const isChecked = selectedValues.includes(checkbox.value);

                return (
                    <div className="form-group row checkbox-item" key={checkbox.id}>
                        <label
                            className={`col-${labelCol} col-form-label`}
                            htmlFor={`${name}-${checkbox.id}`}
                        >
                            {checkbox.label}
                        </label>
                        <div className={`col-${inputCol}`}>
                            <input
                                type="checkbox"
                                id={`${name}-${checkbox.id}`}
                                checked={isChecked}
                                onChange={() => toggleSingleCheckbox(checkbox.value)}
                            />
                        </div>
                    </div>
                );
            })}
        </fieldset>
    );
};
