import * as React from "react";
export var TabPanel = function (_a) {
    var selected = _a.selected, id = _a.id, ariaLabelledBy = _a.ariaLabelledBy, children = _a.children, _b = _a.render, render = _b === void 0 ? true : _b;
    return (render ?
        React.createElement("div", { className: "tab-pane fade show " + (selected ? "active" : ""), id: id, role: "tabpanel", "aria-labelledby": ariaLabelledBy }, children)
        : null);
};
