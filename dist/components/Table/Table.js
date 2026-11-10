import * as React from "react";
import "../../assets/styles/TableStyle.scss";
export const Table = ({ children, hoverableRows, stripedRows }) => (React.createElement("table", { className: (hoverableRows ? "table-hover " : "") + "table" + ((stripedRows !== null && stripedRows !== void 0 ? stripedRows : true) ? " table-striped" : "") }, children));
