import * as React from "react";
import { useFormContext } from "react-hook-form";
import "../../../../assets/styles/CheckboxList.style.scss";
export const CheckboxList = ({ initialCheckboxes, toggleAll, toggleAllLabel = "Välj alla", name, inputCol = 8, labelCol = 4, }) => {
    const { watch, setValue } = useFormContext();
    let selectedValues = watch(name) || [];
    if (!Array.isArray(selectedValues)) {
        selectedValues = [];
    }
    const toggleSingleCheckbox = (checkboxValue) => {
        const isAlreadyChecked = selectedValues.includes(checkboxValue);
        const updatedValues = isAlreadyChecked
            ? selectedValues.filter(val => val !== checkboxValue)
            : [...selectedValues, checkboxValue];
        setValue(name, updatedValues);
    };
    const toggleAllCheckboxes = () => {
        if (selectedValues.length === initialCheckboxes.length) {
            setValue(name, []);
        }
        else {
            const allValues = initialCheckboxes.map((cb) => cb.value);
            setValue(name, allValues);
        }
    };
    return (React.createElement("fieldset", { className: "checkbox-list" },
        toggleAll && (React.createElement("div", { className: "form-group row checkbox-item mb-2" },
            React.createElement("label", { className: `col-${labelCol} col-form-label`, htmlFor: `${name}-toggleAll` }, toggleAllLabel),
            React.createElement("div", { className: `col-${inputCol}` },
                React.createElement("input", { type: "checkbox", id: `${name}-toggleAll`, checked: selectedValues.length === initialCheckboxes.length, onChange: toggleAllCheckboxes })))),
        initialCheckboxes.map((checkbox) => {
            const isChecked = selectedValues.includes(checkbox.value);
            return (React.createElement("div", { className: "form-group row checkbox-item", key: checkbox.id },
                React.createElement("label", { className: `col-${labelCol} col-form-label`, htmlFor: `${name}-${checkbox.id}` }, checkbox.label),
                React.createElement("div", { className: `col-${inputCol}` },
                    React.createElement("input", { type: "checkbox", id: `${name}-${checkbox.id}`, checked: isChecked, onChange: () => toggleSingleCheckbox(checkbox.value) }))));
        })));
};
