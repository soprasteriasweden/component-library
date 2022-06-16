import * as React from "react";
import { IChildren } from "../../models/IChildren";
import "./TableStyle.scss";

interface ITable extends IChildren{
    hoverableRows?: boolean;
}

export const Table = ({ children, hoverableRows }: ITable) => (
    <table className={(hoverableRows ? "table-hover" : "") + " table table-striped"}>
        {children}
    </table>
)