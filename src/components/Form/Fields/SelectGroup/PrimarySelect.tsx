import * as React from "react";
import { IPrimarySelect } from "../../../../models/IFormInput";
import { Select } from "../Select/Select";
import { TextInput } from "../TextInput/TextInput";

export const PrimarySelect: React.FC<IPrimarySelect> = ({ onChange, name, label, labelCol, inputCol, defaultValue, required, disabled, isClearable, options, placeholder }) => {
    const selectedOptionName = React.useMemo(() => {
        if (defaultValue) {
            const selectedOption = options.find(option => option.value === defaultValue);
            return selectedOption?.text || '';
        }
        return '';
    }, [options, defaultValue]);

    return (
        disabled && defaultValue ? (
            <TextInput
                labelCol={labelCol}
                inputCol={inputCol}
                label={label}
                name={name}
                defaultValue={selectedOptionName}
                readonly
                inlineLabel
            />
        ) : (
            <Select
                label={label}
                name={name}
                options={options}
                placeholder={placeholder}
                selectedValue={defaultValue ? defaultValue : undefined}
                inlineLabel
                onChange={onChange}
                required={required}
                disabled={disabled}
                isClearable={isClearable}
                inputCol={inputCol}
                labelCol={labelCol}
            />
        )
    );
};