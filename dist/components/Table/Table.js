import * as React from "react";
import "../../assets/styles/TableStyle.scss";
export var Table = function (_a) {
    var children = _a.children, hoverableRows = _a.hoverableRows;
    return (React.createElement("table", { className: (hoverableRows ? "table-hover" : "") + " table table-striped" }, children));
};
