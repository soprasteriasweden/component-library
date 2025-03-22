import * as React from "react";
import { IMultiSelectCreatable } from "../../../../models/IFormInput";
import { useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { createFilter } from "react-select";
import { SelectStyles } from "../../../MenuList/MenuList";
import { getNestedObjectValue } from "../../../../utils/utils";

interface IOption {
    value: string;
    label: string;
}

export const MultiSelectCreatable: React.FunctionComponent<IMultiSelectCreatable> = ({ values, defaultValue, labelCol, inputCol, name, onValueChange, onBeforeCreateItem, isLoading, isMultiple, label, required, placeholder, disabled, isClearable, resetValue, requiredMessage = "Välj/lägg till ett värde" }) => {
    const { register, unregister, setValue, errors } = useFormContext();
    const [selectedValue, setSelectedValue] = React.useState<IOption | IOption[]>();
    const [options, setOptions] = React.useState<IOption[]>([]);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [tryingToCreate, setTryingToCreate] = React.useState<boolean>(false);
    const selectRef = React.useRef<any>();

    React.useEffect(() => {
        setErrorMessage(null);
        register({ name: name }, { required: required });

        return () => {
            unregister(name);
            setTryingToCreate(false);
        };
    }, []);

    React.useEffect(() => {
        const initialOptions = values.map<IOption>((listItem) => ({
            value: listItem.value,
            label: listItem.text,
        }));

        setOptions(initialOptions);

        const initialValue = initialOptions.filter((option) =>
            Array.isArray(defaultValue) ? defaultValue.includes(option.value) : option.value === defaultValue
        );
        setSelectedValue(isMultiple ? initialValue : initialValue[0] || null);

        if (!isMultiple && initialValue.length === 1) {
            setValue(name, initialValue[0].value);
        } else if (isMultiple) {
            setValue(name, initialValue.map((val) => val.value));
        }

        document.getElementById("clear-form")?.removeEventListener("click", handleResetValue);
        if (!disabled && values && (isClearable || values.length > 1)) {
            document.getElementById("clear-form")?.addEventListener("click", handleResetValue);
        }

        return () => {
            document.getElementById("clear-form")?.removeEventListener("click", handleResetValue);
        };
    }, [values, defaultValue]);

    React.useEffect(() => {
        handleResetValue();
    }, [resetValue]);

    const handleResetValue = () => {
        if (selectRef?.current) {
            setValue(name, undefined);
            setSelectedValue(undefined);
        }
        setErrorMessage(null);
    };

    const onChange = (selectedOption: any | null) => {
        setErrorMessage(null);

        if (selectedOption) {
            if (isMultiple) {
                const values = selectedOption.map((option: IOption) => option.value);
                setValue(name, values);
                setSelectedValue(selectedOption);
                onValueChange?.(values);
            } else {
                setValue(name, selectedOption.value);
                setSelectedValue(selectedOption);
                onValueChange?.(selectedOption.value);
            }
        } else {
            if (required) {
                setErrorMessage(requiredMessage);
            }
            setValue(name, isMultiple ? [] : undefined);
            setSelectedValue(undefined);
            onValueChange?.(isMultiple ? [] : undefined);
        }
    };

    const handleCreate = async (inputValue: string) => {
        setTryingToCreate(false);

        if (!inputValue.trim()) return;

        setTryingToCreate(true);

        if (onBeforeCreateItem) {
            const validationResult = await onBeforeCreateItem(inputValue);

            if (validationResult) {
                setErrorMessage(validationResult);
                return;
            }
        }
        
        setErrorMessage(null);
        const newOption = { value: inputValue, label: inputValue };
        setOptions((prev) => [...prev, newOption]);
        
        if (isMultiple) {
            const newSelected = Array.isArray(selectedValue) ? [...selectedValue, newOption] : [newOption];
            setSelectedValue(newSelected);
            setValue(name, newSelected.map((opt) => opt.value));
            onValueChange?.(newSelected.map((opt) => opt.value));
        } else {
            setSelectedValue(newOption);
            setValue(name, newOption.value);
            onValueChange?.(newOption.value);
        }
    };

    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className="form-group row">
            <label className={`col-${labelCol ?? 4} col-form-label`}>
                {label}:{required ? "*" : ""}
            </label>
            <div className={`col-${inputCol ?? 8}`}>
                <CreatableSelect
                    ref={selectRef}
                    placeholder={placeholder}
                    filterOption={createFilter({
                        ignoreAccents: false,
                        matchFrom: "any",
                        stringify: (option) => `${option.label}`,
                    })}
                    styles={SelectStyles}
                    options={options}
                    value={selectedValue}
                    onChange={onChange}
                    onCreateOption={handleCreate}
                    isLoading={isLoading}
                    loadingMessage={() => "Laddar"}
                    isMulti={isMultiple}
                    isDisabled={disabled}
                    formatCreateLabel={(inputValue) => `Lägg till "${inputValue}"`}
                />
                {!tryingToCreate && errorType === "required" && <span className="text-danger">{requiredMessage}</span>}
                {errorMessage && <span className="text-danger">{errorMessage}</span>}
            </div>
        </div>
    );
};
