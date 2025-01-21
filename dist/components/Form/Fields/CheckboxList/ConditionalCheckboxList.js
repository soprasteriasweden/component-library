import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { TooltipItem } from "../TooltipItem/TooltipItem";
export const ConditionalCheckboxList = ({ items, existingItemIds, name, required, inputCol, labelCol, label, onSelect }) => {
    const [selectedItemIds, setSelectedItemIds] = React.useState([]);
    const [disabledItemIds, setDisabledItemIds] = React.useState([]);
    const handleItemClick = (itemId, invalidItemIds) => {
        const isItemSelected = selectedItemIds.includes(itemId);
        const updatedSelectedItemIds = isItemSelected
            ? selectedItemIds.filter((id) => id !== itemId)
            : [...selectedItemIds, itemId];
        setSelectedItemIds(updatedSelectedItemIds);
        if (onSelect) {
            onSelect(updatedSelectedItemIds);
        }
        if (isItemSelected) {
            const itemsToEnable = invalidItemIds.filter((invalidId) => !updatedSelectedItemIds.some((selectedId) => { var _a; return (_a = items.find((item) => item.id.toString() === selectedId)) === null || _a === void 0 ? void 0 : _a.invalidCombinationIds.includes(invalidId); }));
            setDisabledItemIds(disabledItemIds.filter((id) => !itemsToEnable.includes(id)));
        }
        else {
            setDisabledItemIds([...disabledItemIds, ...invalidItemIds]);
        }
    };
    return (_jsxs("fieldset", { className: "checkbox-list", children: [_jsx("h6", { children: `${label}${required ? "*" : ""}` }), existingItemIds ?
                existingItemIds.map((existingItemId) => {
                    const item = items.find((item) => item.id === existingItemId);
                    return (_jsx(TooltipItem, { title: item.name, description: item.description, showDisc: true }, item === null || item === void 0 ? void 0 : item.id));
                })
                : (items.map((item) => (_jsx("div", { children: _jsx(Checkbox, { label: item.name, tooltipDescription: item.description, id: item.id.toString(), value: item.id.toString(), name: name, checked: selectedItemIds.includes(item.id.toString()), disabled: disabledItemIds.includes(item.id.toString()), onChange: () => handleItemClick(item.id.toString(), item.invalidCombinationIds), labelCol: labelCol, inputCol: inputCol, inlineLabel: true }) }, item.id.toString()))))] }));
};
