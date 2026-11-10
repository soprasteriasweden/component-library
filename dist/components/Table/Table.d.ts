import * as React from "react";
import { IChildren } from "../../models/IChildren";
import "../../assets/styles/TableStyle.scss";
interface ITable extends IChildren {
    hoverableRows?: boolean;
    stripedRows?: boolean | null;
}
export declare const Table: ({ children, hoverableRows, stripedRows }: ITable) => React.JSX.Element;
export {};
