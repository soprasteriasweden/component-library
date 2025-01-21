import { jsx as _jsx } from "react/jsx-runtime";
export const TabPanel = ({ selected, id, ariaLabelledBy, children, render = true }) => (render ?
    _jsx("div", { className: "tab-pane fade show " + (selected ? "active" : ""), id: id, role: "tabpanel", "aria-labelledby": ariaLabelledBy, children: children })
    : null);
