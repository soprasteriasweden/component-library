import * as React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { useFormContext } from "react-hook-form";
export const ConditionalCheckboxList = ({ items, existingItemIds, name, required, inputCol, labelCol, label, onSelect }) => {
    const { setValue, unregister } = useFormContext();
    const [selectedItemIds, setSelectedItemIds] = React.useState([]);
    const [disabledItemIds, setDisabledItemIds] = React.useState([]);
    const handleItemClick = (itemId, invalidItemIds) => {
        const isItemSelected = selectedItemIds.includes(itemId);
        const updatedSelectedItemIds = isItemSelected
            ? selectedItemIds.filter((id) => id !== itemId)
            : [...selectedItemIds, itemId];
        const filteredSelectedItemIds = updatedSelectedItemIds.filter((id) => !disabledItemIds.includes(id));
        setSelectedItemIds(filteredSelectedItemIds);
        if (isItemSelected) {
            setValue(`${name}[${itemId}]`, undefined);
        }
        else {
            setValue(`${name}[${itemId}]`, itemId);
        }
        [...disabledItemIds, ...invalidItemIds].forEach((id) => {
            setValue(`${name}[${id}]`, undefined);
            unregister(`${name}[${id}]`);
        });
        if (onSelect) {
            onSelect(filteredSelectedItemIds);
        }
        if (isItemSelected) {
            const itemsToEnable = invalidItemIds.filter((invalidId) => !filteredSelectedItemIds.some((selectedId) => { var _a; return (_a = items.find((item) => item.id.toString() === selectedId)) === null || _a === void 0 ? void 0 : _a.invalidCombinationIds.includes(invalidId); }));
            setDisabledItemIds(disabledItemIds.filter((id) => !itemsToEnable.includes(id)));
        }
        else {
            setDisabledItemIds([...new Set([...disabledItemIds, ...invalidItemIds])]);
            setSelectedItemIds((current) => current.filter((id) => !invalidItemIds.includes(id)));
        }
    };
    return (React.createElement("fieldset", { className: "checkbox-list" },
        React.createElement("h6", null, `${label}${required ? "*" : ""}`),
        existingItemIds ?
            existingItemIds.map((existingItemId) => {
                const item = items.find((item) => item.id === existingItemId);
                return (React.createElement(TooltipItem, { key: item === null || item === void 0 ? void 0 : item.id, title: item.name, description: item.description, showDisc: true }));
            })
            : (items.map((item) => (React.createElement("div", { key: item.id.toString() },
                React.createElement(Checkbox, { label: item.name, tooltipDescription: item.description, id: item.id.toString(), value: item.id.toString(), name: `${name}[${item.id}]`, checked: selectedItemIds.includes(item.id.toString()), disabled: disabledItemIds.includes(item.id.toString()), onChange: () => handleItemClick(item.id.toString(), item.invalidCombinationIds), labelCol: labelCol, inputCol: inputCol, inlineLabel: true })))))));
};
