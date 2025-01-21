import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import "../../../../assets/styles/CheckboxList.style.scss";
export const CheckboxList = ({ initialCheckboxes, toggleAll, toggleAllLabel, name, inputCol, labelCol }) => {
    const [checkboxes, setCheckboxes] = React.useState(initialCheckboxes);
    const [checkAll, setCheckAll] = React.useState(false);
    React.useEffect(() => {
        setCheckboxes(initialCheckboxes);
    }, [initialCheckboxes]);
    const toggleAllCheckboxes = (isChecked) => {
        setCheckAll(isChecked);
    };
    return (_jsxs("fieldset", { className: "checkbox-list", children: [toggleAll
                ?
                    _jsx(_Fragment, { children: _jsx(Checkbox, { name: "toggleCheckboxes", id: "toggleAll", label: toggleAllLabel == undefined ? "Välj alla" : toggleAllLabel, value: "all", labelCol: labelCol, inputCol: inputCol, onChange: (isChecked) => toggleAllCheckboxes(isChecked) }) })
                : null, checkboxes.map((checkbox, index) => {
                return _jsx(Checkbox, { name: name, value: checkbox.value, label: checkbox.label, checked: checkAll || checkbox.checked, disabled: checkAll, labelCol: labelCol, inputCol: inputCol, id: checkbox.id }, index);
            })] }));
};
