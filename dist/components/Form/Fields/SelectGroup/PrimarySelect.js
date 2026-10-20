import * as React from "react";
import { Select } from "../Select/Select";
import { TextInput } from "../TextInput/TextInput";
export const PrimarySelect = ({ onChange, name, label, labelCol, inputCol, defaultValue, required, disabled, isClearable, options, placeholder }) => {
    const selectedOptionName = React.useMemo(() => {
        if (defaultValue) {
            const selectedOption = options.find(option => option.value === defaultValue);
            return (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.text) || '';
        }
        return '';
    }, [options, defaultValue]);
    return (disabled && defaultValue ? (React.createElement(TextInput, { labelCol: labelCol, inputCol: inputCol, label: label, name: name, defaultValue: selectedOptionName, readonly: true, inlineLabel: true })) : (React.createElement(Select, { label: label, name: name, options: options, placeholder: placeholder, selectedValue: defaultValue ? defaultValue : undefined, inlineLabel: true, onChange: onChange, required: required, disabled: disabled, isClearable: isClearable, inputCol: inputCol, labelCol: labelCol })));
};
