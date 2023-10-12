import * as React from "react";
import { IMultiSelect } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import Select, { createFilter, ValueType } from 'react-select';
import { SelectStyles } from "../../../MenuList/MenuList";
import { getNestedObjectValue } from "../../../../utils/utils";

export const MultiSelect: React.FunctionComponent<IMultiSelect> = ({ values, defaultValue, labelCol, inputCol, name, onValueChange, isLoading, isMultiple, label, required, placeholder, disabled, isClearable, resetValue }) => {

    const { register, setValue, errors } = useFormContext();
    const [selectedValue, setSelectedValue] = React.useState<IOption | IOption[]>();
    const [options, setOptions] = React.useState<IOption[]>([])
    var selectRef = React.useRef<any>();

    interface IOption {
        value: string;
        label: string;
        selected?: boolean;
    }

    React.useEffect(() => {
        register({ name: name }, { required: required });
    }, []);

    React.useEffect(() => {
        const options = values.map<IOption>((listItem) => {
            return {
                value: listItem.value,
                label: listItem.text,
                selected: typeof defaultValue === "string" || typeof defaultValue === "undefined"
                    ? listItem.value == defaultValue
                    : defaultValue.indexOf(listItem.value) != -1
            }
        });

        setOptions(options);

        const initalValue = options.filter((option) => option.selected);
        setSelectedValue(initalValue);

        if (!isMultiple && initalValue.length === 1) {
            setValue(name, initalValue[0].value);
        } else if (isMultiple) {
            setValue(name, initalValue.map((val) => val.value));
        }

        document.getElementById("clear-form")?.removeEventListener("click", handleResetValue);
        if (!disabled && values && (isClearable || values.length > 1)) {
            document.getElementById("clear-form")?.addEventListener("click", handleResetValue);
        }

        return () => {
            document.getElementById("clear-form")?.removeEventListener("click", handleResetValue);
        }
    }, [values, defaultValue]);

    React.useEffect(() => {
        handleResetValue();
    }, [resetValue])

    const handleResetValue = () => {
        if (selectRef?.current) {
            selectRef.current.select.clearValue();
            setValue(name, undefined)
            setSelectedValue(undefined)
        }
    }

    const onChange = (selectedOption: any | null) => {
        if (selectedOption) {
            if (isMultiple) {
                var values = selectedOption.map((option: any) => { return option.value })
                setValue(name, values);
                setSelectedValue(selectedOption);
                if (onValueChange) {
                    onValueChange(values);
                }
            }
            else {
                setValue(name, selectedOption.value);
                setSelectedValue(selectedOption);
                if (onValueChange) {
                    onValueChange(selectedOption.value);
                }
            }
        }
        else {
            setValue(name, isMultiple ? [] : undefined);
            setSelectedValue(isMultiple ? [] : undefined);
            if (onValueChange) {
                onValueChange(isMultiple ? [] : undefined);
            }
        }
    }

    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className="form-group row">
            <label className={`col-${labelCol ?? 4} col-form-label`}>{label}:{required ? "*" : ""}</label>
            <div className={`col-${inputCol ?? 8}`}>
                <Select
                    ref={selectRef}
                    placeholder={placeholder}
                    filterOption={createFilter({
                        ignoreAccents: false,
                        matchFrom: 'any',
                        stringify: (option: { label: any; }) => `${option.label}`
                    })}
                    styles={SelectStyles}
                    options={options}
                    value={selectedValue}
                    onChange={(selectedOption: any) => onChange(selectedOption)}
                    isLoading={isLoading}
                    loadingMessage={() => "Laddar"}
                    isMulti={isMultiple}
                    isDisabled={disabled === true}
                />
                <span className="text-danger">{errorType === "required" && "Välj minst ett värde"}</span>
            </div>
        </div>
    )
}