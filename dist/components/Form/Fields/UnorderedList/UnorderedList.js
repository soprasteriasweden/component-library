import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import "../../../../assets/styles/UnorderedList.style.scss";
export const UnorderedList = ({ name, textRows, label, inlineLabel, className = "unordered-list", labelCol = 4, inputCol = 8 }) => {
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":"] }), _jsx("div", { className: inlineLabel ? `col-${inputCol}` : "", children: _jsx("ul", { id: name, children: textRows.length > 0 ?
                        textRows.map((textRow, key) => {
                            return (_jsx("li", { children: textRow }, key));
                        }) : null }) })] }));
};
