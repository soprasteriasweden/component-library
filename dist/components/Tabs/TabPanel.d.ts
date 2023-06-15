/// <reference types="react" />
import { IChildren } from "../../models/IChildren";
interface ITabPanel extends IChildren {
    selected?: boolean;
    id: string;
    ariaLabelledBy: string;
    render?: boolean;
}
export declare const TabPanel: ({ selected, id, ariaLabelledBy, children, render }: ITabPanel) => JSX.Element | null;
export {};
