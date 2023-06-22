import * as React from "react";
import { useFormContext } from 'react-hook-form';
import Select, { createFilter, ValueType } from 'react-select';
import "../../../../assets/styles/Dropdown.style.scss";
import { IDropdown } from "../../../../models/IFormInput";
import { SelectStyles, MenuList } from "../../../MenuList/MenuList";

interface IOption {
    value: string;
    label: string;
    selected?: boolean;
}

export const Dropdown: React.FC<IDropdown> = ({
    items,
    defaultValue,
    labelCol,
    inputCol,
    name,
    isLoading,
    onValueChange,
    required,
    label,
    useFixedListItemHeight,
    disabled,
    isClearable,
    placeholder,
    resetValue,
    clearValueIfNoInitalValue,
    errorMessage,
    noOptionsMessage,
    getItemLabel
}) => {

    const { register, setValue, errors, unregister } = useFormContext();
    const [selectedValue, setSelectedValue] = React.useState<IOption>();
    const [options, setOptions] = React.useState<IOption[]>()
    var selectRef = React.useRef<any>();

    React.useEffect(() => {
        document.getElementById("clear-form")?.removeEventListener("click", handleResetValue);
        if (!disabled && items && (isClearable || items.length > 1)) {
            document.getElementById("clear-form")?.addEventListener("click", handleResetValue);
        }

        return () => {
            document.getElementById("clear-form")?.removeEventListener("click", handleResetValue);
        }
    }, [items])

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

    React.useEffect(() => {
        register({ name: name }, { required: required });
        if (items) {
            const mappedOptions = items.map<IOption>((item) => {
                return {
                    value: item.id?.toString(),
                    label: getItemLabel(item),
                    selected: defaultValue !== undefined && item.id?.toString() === defaultValue
                }
            });

            const initalValue = mappedOptions.find((option) => { return option.selected === true });
            if (initalValue) {
                setValue(name, initalValue.value);
                setSelectedValue(initalValue);
            }
            else {
                if (clearValueIfNoInitalValue) {
                    selectRef.current.select.clearValue();
                }
                setValue(name, undefined);
                setSelectedValue(undefined);
            }

            setOptions(mappedOptions);
        }

        return () => {
            unregister(name);
        }

    }, [items, defaultValue, required]);

    const onChange = (selectedOption: any | null) => {
        if (selectedOption) {
            setValue(name, selectedOption.value);
            setSelectedValue(selectedOption);
        }
        else {
            setValue(name, undefined);
            setSelectedValue(undefined)
        }
        if (onValueChange) {
            onValueChange(selectedOption?.value ?? "");
        }
    }

    const showErrorMessage = () => {
        if (errorMessage) {
            return errorMessage;
        } else {
            return "Please select an option";
        }
    }

    return (
        <div className="form-group row">
            <label className={`col-${labelCol ?? 4} col-form-label`}>{label}:{required ? "*" : ""}</label>
            <div className={`col-${inputCol ?? 8}`}>
                <Select
                    ref={selectRef}
                    isLoading={isLoading}
                    loadingMessage={() => "Laddar..."}
                    noOptionsMessage={() => { return noOptionsMessage ? noOptionsMessage : "No options available" }}
                    placeholder={placeholder}
                    filterOption={createFilter({
                        ignoreAccents: false,
                        matchFrom: 'any',
                        stringify: option => `${option.label}`
                    })}
                    options={options}
                    isOptionSelected={(option: IOption) => option.selected === true}
                    value={selectedValue}
                    onChange={(selectedOption: any) => onChange(selectedOption)}
                    components={useFixedListItemHeight ? { MenuList } : undefined}
                    styles={useFixedListItemHeight ? SelectStyles : undefined}
                    isDisabled={disabled === true || (disabled === undefined && defaultValue !== undefined && options?.length === 0)}
                    isClearable={isClearable !== undefined ? isClearable : true}
                    classNamePrefix="custom-dropdown-styling"
                />

                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" && showErrorMessage() : ""}</span>
            </div>
        </div>
    )
}