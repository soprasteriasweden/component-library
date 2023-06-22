var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { TooltipItem } from "../TooltipItem/TooltipItem";
export var ConditionalCheckboxList = function (_a) {
    var items = _a.items, existingItemIds = _a.existingItemIds, name = _a.name, required = _a.required, inputCol = _a.inputCol, labelCol = _a.labelCol, label = _a.label, onSelect = _a.onSelect;
    var _b = React.useState([]), selectedItemIds = _b[0], setSelectedItemIds = _b[1];
    var _c = React.useState([]), disabledItemIds = _c[0], setDisabledItemIds = _c[1];
    var handleItemClick = function (itemId, invalidItemIds) {
        var isItemSelected = selectedItemIds.includes(itemId);
        var updatedSelectedItemIds = isItemSelected
            ? selectedItemIds.filter(function (id) { return id !== itemId; })
            : __spreadArray(__spreadArray([], selectedItemIds, true), [itemId], false);
        setSelectedItemIds(updatedSelectedItemIds);
        if (onSelect) {
            onSelect(updatedSelectedItemIds);
        }
        if (isItemSelected) {
            var itemsToEnable_1 = invalidItemIds.filter(function (invalidId) { return !updatedSelectedItemIds.some(function (selectedId) { var _a; return (_a = items.find(function (item) { return item.id.toString() === selectedId; })) === null || _a === void 0 ? void 0 : _a.invalidCombinationIds.includes(invalidId); }); });
            setDisabledItemIds(disabledItemIds.filter(function (id) { return !itemsToEnable_1.includes(id); }));
        }
        else {
            setDisabledItemIds(__spreadArray(__spreadArray([], disabledItemIds, true), invalidItemIds, true));
        }
    };
    return (React.createElement("fieldset", { className: "checkbox-list" },
        React.createElement("h6", null, "".concat(label).concat(required ? "*" : "")),
        existingItemIds ?
            existingItemIds.map(function (existingItemId) {
                var item = items.find(function (item) { return item.id === existingItemId; });
                return (React.createElement(TooltipItem, { key: item === null || item === void 0 ? void 0 : item.id, title: item.name, description: item.description, showDisc: true }));
            })
            : (items.map(function (item) { return (React.createElement("div", { key: item.id.toString() },
                React.createElement(Checkbox, { label: item.name, tooltipDescription: item.description, id: item.id.toString(), value: item.id.toString(), name: name, checked: selectedItemIds.includes(item.id.toString()), disabled: disabledItemIds.includes(item.id.toString()), onChange: function () { return handleItemClick(item.id.toString(), item.invalidCombinationIds); }, labelCol: labelCol, inputCol: inputCol, inlineLabel: true }))); }))));
};
