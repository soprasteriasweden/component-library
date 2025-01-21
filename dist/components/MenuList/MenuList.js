import { jsx as _jsx } from "react/jsx-runtime";
import { FixedSizeList as List } from "react-window";
export const MenuList = ({ children, maxHeight }) => {
    return (_jsx(List, { height: maxHeight, itemCount: children.length, itemSize: 35, width: "100%", children: ({ index, style }) => _jsx("div", { style: style, children: children[index] }) }));
};
export const SelectStyles = {
    control: (provided) => (Object.assign(Object.assign({}, provided), { minHeight: "35px" })),
    valueContainer: (provided) => (Object.assign(Object.assign({}, provided), { position: "static" })),
    indicatorSeparator: (provided) => (Object.assign(Object.assign({}, provided), { width: "0px" })),
};
