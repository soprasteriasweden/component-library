import { FixedSizeList as List } from "react-window";

import * as React from "react";

export const MenuList = ({ children, maxHeight }) => {

    return (React.createElement(List, { height: maxHeight, itemCount: children.length, itemSize: 35, width: "100%" }, ({ index, style }) => React.createElement("div", { style: style }, children[index])));

};

export const SelectStyles = {

    control: (provided) => (Object.assign(Object.assign({}, provided), { minHeight: "35px" })),

    valueContainer: (provided) => (Object.assign(Object.assign({}, provided), { position: "static" })),

    indicatorSeparator: (provided) => (Object.assign(Object.assign({}, provided), { width: "0px" })),

};

