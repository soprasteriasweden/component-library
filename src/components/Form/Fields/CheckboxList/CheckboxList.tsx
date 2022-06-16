import * as React from "react";
import { ICheckboxList, ICheckbox } from '../../../../models/IFormInput';
import { Checkbox } from "../Checkbox/Checkbox";
import "./CheckboxList.style.scss"

export const CheckboxList: React.FunctionComponent<ICheckboxList> = ({ initialCheckboxes, toggleAll, toggleAllLabel, name, inputCol, labelCol }) => {

    const [checkboxes, setCheckboxes] = React.useState<ICheckbox[]>(initialCheckboxes);
    const [checkAll, setCheckAll] = React.useState<boolean>(false);

    React.useEffect(() => {
        setCheckboxes(initialCheckboxes);
    }, [initialCheckboxes]);

    const toggleAllCheckboxes = (isChecked: boolean) => {
        setCheckAll(isChecked);
    }

    return (
        <fieldset className="checkbox-list">
            {
                toggleAll
                    ?
                    <>
                        <Checkbox
                            name="toggleCheckboxes"
                            id="toggleAll"
                            label={toggleAllLabel == undefined ? "Välj alla" : toggleAllLabel}
                            value="all"
                            labelCol={labelCol}
                            inputCol={inputCol}
                            onChange={(isChecked) => toggleAllCheckboxes(isChecked)} />
                    </>
                    : null
            }
            {
                checkboxes.map((checkbox, index) => {
                    return <Checkbox
                        key={index}
                        name={name}
                        value={checkbox.value}
                        label={checkbox.label}
                        checked={checkAll || checkbox.checked}
                        disabled={checkAll}
                        labelCol={labelCol}
                        inputCol={inputCol}
                        id={checkbox.id}
                    />
                })
            }
        </fieldset>
    )
}