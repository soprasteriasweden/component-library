import * as React from "react";
import { Select } from "../Select/Select";
import { TextInput } from "../TextInput/TextInput";
export var PrimarySelect = function (_a) {
    var onChange = _a.onChange, name = _a.name, label = _a.label, labelCol = _a.labelCol, inputCol = _a.inputCol, defaultValue = _a.defaultValue, required = _a.required, disabled = _a.disabled, isClearable = _a.isClearable, options = _a.options, placeholder = _a.placeholder;
    var selectedOptionName = React.useMemo(function () {
        if (defaultValue) {
            var selectedOption = options.find(function (option) { return option.value === defaultValue; });
            return (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.text) || '';
        }
        return '';
    }, [options, defaultValue]);
    return (disabled && defaultValue ? (React.createElement(TextInput, { labelCol: labelCol, inputCol: inputCol, label: label, name: name, defaultValue: selectedOptionName, readonly: true, inlineLabel: true })) : (React.createElement(Select, { label: label, name: name, options: options, placeholder: placeholder, selectedValue: defaultValue ? defaultValue : undefined, inlineLabel: true, onChange: onChange, required: required, disabled: disabled, isClearable: isClearable, inputCol: inputCol, labelCol: labelCol })));
};
