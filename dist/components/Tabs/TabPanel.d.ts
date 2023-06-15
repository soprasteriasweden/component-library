import * as React from "react";
import { IChildren } from "../../models/IChildren";
interface ITabPanel extends IChildren {
    selected?: boolean;
    id: string;
    ariaLabelledBy: string;
    render?: boolean;
}
export declare const TabPanel: ({ selected, id, ariaLabelledBy, children, render }: ITabPanel) => React.JSX.Element | null;
export {};
