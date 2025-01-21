import { jsx as _jsx } from "react/jsx-runtime";
export const TabLink = ({ selected, href, id, text, render = true }) => (render ?
    _jsx("a", { className: "nav-item nav-link " + (selected ? "active" : ""), id: id, "data-toggle": "tab", href: "#" + href, role: "tab", "aria-controls": href, "aria-selected": selected, children: text })
    : null);
