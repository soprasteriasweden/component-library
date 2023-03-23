import * as React from "react";
export var TabLink = function (_a) {
    var selected = _a.selected, href = _a.href, id = _a.id, text = _a.text, _b = _a.render, render = _b === void 0 ? true : _b;
    return (render ?
        React.createElement("a", { className: "nav-item nav-link " + (selected ? "active" : ""), id: id, "data-toggle": "tab", href: "#" + href, role: "tab", "aria-controls": href, "aria-selected": selected }, text)
        : null);
};
