import * as React from "react";
import "../../assets/styles/TableStyle.scss";
export const Table = ({ children, hoverableRows }) => (React.createElement("table", { className: (hoverableRows ? "table-hover" : "") + " table table-striped" }, children));
