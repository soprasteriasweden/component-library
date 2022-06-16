import * as React from "react";

import { Checkbox } from "../Checkbox/Checkbox";

import "./CheckboxList.style.scss";

export const CheckboxList = ({ initialCheckboxes, toggleAll, toggleAllLabel, name, inputCol, labelCol }) => {

    const [checkboxes, setCheckboxes] = React.useState(initialCheckboxes);

    const [checkAll, setCheckAll] = React.useState(false);

    React.useEffect(() => {

        setCheckboxes(initialCheckboxes);

    }, [initialCheckboxes]);

    const toggleAllCheckboxes = (isChecked) => {

        setCheckAll(isChecked);

    };

    return (React.createElement("fieldset", { className: "checkbox-list" },

        toggleAll

            ?

                React.createElement(React.Fragment, null,

                    React.createElement(Checkbox, { name: "toggleCheckboxes", id: "toggleAll", label: toggleAllLabel == undefined ? "Välj alla" : toggleAllLabel, value: "all", labelCol: labelCol, inputCol: inputCol, onChange: (isChecked) => toggleAllCheckboxes(isChecked) }))

            : null,

        checkboxes.map((checkbox, index) => {

            return React.createElement(Checkbox, { key: index, name: name, value: checkbox.value, label: checkbox.label, checked: checkAll || checkbox.checked, disabled: checkAll, labelCol: labelCol, inputCol: inputCol, id: checkbox.id });

        })));

};

