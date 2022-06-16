import * as React from "react";

export const TabLink = ({ selected, href, id, text, render = true }) => (render ?

    React.createElement("a", { className: "nav-item nav-link " + (selected ? "active" : ""), id: id, "data-toggle": "tab", href: "#" + href, role: "tab", "aria-controls": href, "aria-selected": selected }, text)

    : null);

