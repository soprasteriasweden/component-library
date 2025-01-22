import * as React from "react";
export const TabPanel = ({ selected, id, ariaLabelledBy, children, render = true }) => (render ?
    React.createElement("div", { className: "tab-pane fade show " + (selected ? "active" : ""), id: id, role: "tabpanel", "aria-labelledby": ariaLabelledBy }, children)
    : null);
