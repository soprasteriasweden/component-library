import * as React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import "../../../../assets/styles/CheckboxList.style.scss";
export var CheckboxList = function (_a) {
    var initialCheckboxes = _a.initialCheckboxes, toggleAll = _a.toggleAll, toggleAllLabel = _a.toggleAllLabel, name = _a.name, inputCol = _a.inputCol, labelCol = _a.labelCol;
    var _b = React.useState(initialCheckboxes), checkboxes = _b[0], setCheckboxes = _b[1];
    var _c = React.useState(false), checkAll = _c[0], setCheckAll = _c[1];
    React.useEffect(function () {
        setCheckboxes(initialCheckboxes);
    }, [initialCheckboxes]);
    var toggleAllCheckboxes = function (isChecked) {
        setCheckAll(isChecked);
    };
    return (React.createElement("fieldset", { className: "checkbox-list" },
        toggleAll
            ?
                React.createElement(React.Fragment, null,
                    React.createElement(Checkbox, { name: "toggleCheckboxes", id: "toggleAll", label: toggleAllLabel == undefined ? "Välj alla" : toggleAllLabel, value: "all", labelCol: labelCol, inputCol: inputCol, onChange: function (isChecked) { return toggleAllCheckboxes(isChecked); } }))
            : null,
        checkboxes.map(function (checkbox, index) {
            return React.createElement(Checkbox, { key: index, name: name, value: checkbox.value, label: checkbox.label, checked: checkAll || checkbox.checked, disabled: checkAll, labelCol: labelCol, inputCol: inputCol, id: checkbox.id });
        })));
};
