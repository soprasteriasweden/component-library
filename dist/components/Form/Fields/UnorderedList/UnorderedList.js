import * as React from "react";
import "../../../../assets/styles/UnorderedList.style.scss";
export var UnorderedList = function (_a) {
    var name = _a.name, textRows = _a.textRows, label = _a.label, inlineLabel = _a.inlineLabel, _b = _a.className, className = _b === void 0 ? "unordered-list" : _b, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":"),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement("ul", { id: name }, textRows.length > 0 ?
                textRows.map(function (textRow, key) {
                    return (React.createElement("li", { key: key }, textRow));
                }) : null))));
};
