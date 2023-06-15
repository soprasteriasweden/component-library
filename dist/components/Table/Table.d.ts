import * as React from "react";
import { IChildren } from "../../models/IChildren";
import "./TableStyle.scss";
interface ITable extends IChildren {
    hoverableRows?: boolean;
}
export declare const Table: ({ children, hoverableRows }: ITable) => React.JSX.Element;
export {};
