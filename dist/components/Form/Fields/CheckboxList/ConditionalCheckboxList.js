import React from "react";
import { useFormContext } from "react-hook-form";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import "../../../../assets/styles/CheckboxList.style.scss";
export const ConditionalCheckboxList = ({ items, existingItemIds, name, required, label, onSelect, inputCol = 8, labelCol = 4 }) => {
    const { watch, setValue } = useFormContext();
    let selected = watch(name) || [];
    if (!Array.isArray(selected))
        selected = [];
    const [selectedIds, setSelectedIds] = React.useState(selected);
    const [disabledIds, setDisabledIds] = React.useState([]);
    React.useEffect(() => {
        setSelectedIds(selected);
    }, [selected]);
    const toggleItem = (itemId) => {
        const isSelected = selectedIds.includes(itemId);
        let updatedSelected = [...selectedIds];
        let updatedDisabled = [...disabledIds];
        const found = items.find((it) => it.id.toString() === itemId);
        if (!found)
            return;
        const invalidCombos = found.invalidCombinationIds || [];
        if (isSelected) {
            updatedSelected = updatedSelected.filter((id) => id !== itemId);
            updatedDisabled = recalcDisabled(updatedSelected, updatedDisabled, items);
        }
        else {
            updatedSelected.push(itemId);
            updatedSelected = updatedSelected.filter((id) => !invalidCombos.includes(id));
            updatedDisabled = Array.from(new Set([...updatedDisabled, ...invalidCombos]));
            updatedSelected = updatedSelected.filter((id) => !updatedDisabled.includes(id));
            updatedDisabled = recalcDisabled(updatedSelected, updatedDisabled, items);
        }
        setSelectedIds(updatedSelected);
        setDisabledIds(updatedDisabled);
        setValue(name, updatedSelected);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(updatedSelected);
    };
    if (existingItemIds) {
        return (React.createElement("fieldset", { className: "checkbox-list" },
            React.createElement("h6", null,
                label,
                required ? "*" : ""),
            existingItemIds.map((eid) => {
                const found = items.find((it) => it.id === eid);
                if (!found)
                    return null;
                return (React.createElement(TooltipItem, { key: found.id, title: found.name, description: found.description || "", showDisc: true }));
            })));
    }
    return (React.createElement("fieldset", { className: "checkbox-list" },
        React.createElement("h6", null,
            label,
            required ? "*" : ""),
        items.map((it) => {
            const itId = it.id.toString();
            const isChecked = selectedIds.includes(itId);
            const isDisabled = disabledIds.includes(itId);
            return (React.createElement("div", { className: "form-group row", key: itId },
                React.createElement("label", { htmlFor: itId, className: `col-${labelCol} col-form-label`, style: { cursor: isDisabled ? "not-allowed" : "pointer" } }, it.name),
                React.createElement("div", { className: `col-${inputCol}` },
                    React.createElement("input", { type: "checkbox", id: itId, checked: isChecked, disabled: isDisabled, onChange: () => toggleItem(itId), style: { cursor: isDisabled ? "not-allowed" : "pointer" } }))));
        })));
};
function recalcDisabled(selectedIds, prevDisabled, items) {
    let newDisabledSet = new Set();
    selectedIds.forEach((sid) => {
        const found = items.find((it) => it.id.toString() === sid);
        if (found === null || found === void 0 ? void 0 : found.invalidCombinationIds) {
            found.invalidCombinationIds.forEach((comboId) => {
                newDisabledSet.add(comboId);
            });
        }
    });
    return Array.from(newDisabledSet);
}
