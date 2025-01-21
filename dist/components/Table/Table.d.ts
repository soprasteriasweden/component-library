import { IChildren } from "../../models/IChildren";
import "../../assets/styles/TableStyle.scss";
interface ITable extends IChildren {
    hoverableRows?: boolean;
}
export declare const Table: ({ children, hoverableRows }: ITable) => import("react/jsx-runtime").JSX.Element;
export {};
