import * as React from "react";
import { PrimarySelect } from "./PrimarySelect";
import { SecondarySelect } from "./SecondarySelect";
export var SelectGroup = function (_a) {
    var primaryOptions = _a.primaryOptions, secondaryOptions = _a.secondaryOptions, setPrimaryValue = _a.setPrimaryValue, setSecondaryValue = _a.setSecondaryValue, primaryDefaultValue = _a.primaryDefaultValue, secondaryDefaultValue = _a.secondaryDefaultValue, primaryLabel = _a.primaryLabel, secondaryLabel = _a.secondaryLabel, primaryName = _a.primaryName, secondaryName = _a.secondaryName, primaryPlaceholder = _a.primaryPlaceholder, secondaryPlaceholder = _a.secondaryPlaceholder, disabled = _a.disabled, required = _a.required, isClearable = _a.isClearable, labelCol = _a.labelCol, inputCol = _a.inputCol, shouldEnableSecondary = _a.shouldEnableSecondary;
    var _b = React.useState(true), isSecondaryDisabled = _b[0], setIsSecondaryDisabled = _b[1];
    React.useEffect(function () {
        if (secondaryDefaultValue) {
            setIsSecondaryDisabled(false);
        }
    }, [secondaryDefaultValue]);
    var handlePrimaryChange = function (val) {
        setPrimaryValue(val);
        setSecondaryValue(undefined);
        if (shouldEnableSecondary) {
            setIsSecondaryDisabled(!shouldEnableSecondary(val));
        }
    };
    var handleSecondaryChange = function (val) {
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
