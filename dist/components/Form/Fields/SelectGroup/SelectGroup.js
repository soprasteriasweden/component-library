import * as React from "react";
import { PrimarySelect } from "./PrimarySelect";
import { SecondarySelect } from "./SecondarySelect";
export const SelectGroup = ({ primaryOptions, secondaryOptions, setPrimaryValue, setSecondaryValue, primaryDefaultValue, secondaryDefaultValue, primaryLabel, secondaryLabel, primaryName, secondaryName, primaryPlaceholder, secondaryPlaceholder, disabled, required, isClearable, labelCol, inputCol, shouldEnableSecondary }) => {
    const [isSecondaryDisabled, setIsSecondaryDisabled] = React.useState(true);
    React.useEffect(() => {
        if (secondaryDefaultValue) {
            setIsSecondaryDisabled(false);
        }
    }, [secondaryDefaultValue]);
    const handlePrimaryChange = (val) => {
        setPrimaryValue(val);
        setSecondaryValue(undefined);
        if (shouldEnableSecondary) {
            setIsSecondaryDisabled(!shouldEnableSecondary(val));
        }
    };
    const handleSecondaryChange = (val) => {
        if (val === "-1") {
            setSecondaryValue(undefined);
        }
        else {
            setSecondaryValue(val);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(PrimarySelect, { label: primaryLabel, name: primaryName, labelCol: labelCol, inputCol: inputCol, disabled: disabled, defaultValue: primaryDefaultValue, onChange: handlePrimaryChange, isClearable: isClearable, required: required, options: primaryOptions, placeholder: primaryPlaceholder }),
        !isSecondaryDisabled &&
            React.createElement(SecondarySelect, { label: secondaryLabel, name: secondaryName, labelCol: labelCol, inputCol: inputCol, disabled: disabled, defaultValue: secondaryDefaultValue, onChange: handleSecondaryChange, isClearable: isClearable, required: required, options: secondaryOptions, placeholder: secondaryPlaceholder })));
};
