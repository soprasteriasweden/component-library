import * as React from "react";
import "../../../../assets/styles/UnorderedList.style.scss";
export const UnorderedList = ({ name, textRows, label, inlineLabel, className = "unordered-list", labelCol = 4, inputCol = 8 }) => {
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":"),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("ul", { id: name }, textRows.length > 0 ?
                textRows.map((textRow, key) => {
                    return (React.createElement("li", { key: key }, textRow));
                }) : null))));
};
