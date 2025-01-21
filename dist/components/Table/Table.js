import { jsx as _jsx } from "react/jsx-runtime";
import "../../assets/styles/TableStyle.scss";
export const Table = ({ children, hoverableRows }) => (_jsx("table", { className: (hoverableRows ? "table-hover" : "") + " table table-striped", children: children }));
