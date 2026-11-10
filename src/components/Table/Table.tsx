import * as React from "react";
import { IChildren } from "../../models/IChildren";
import "../../assets/styles/TableStyle.scss";

interface ITable extends IChildren{
    hoverableRows?: boolean;
    stripedRows?: boolean | null;
}

export const Table = ({ children, hoverableRows, stripedRows }: ITable) => (
    <table className={(hoverableRows ? "table-hover " : "") + "table" + ((stripedRows ?? true) ? " table-striped" : "")}>
        {children}
    </table>
)