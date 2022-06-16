import * as React from "react";
import { IChildren } from "../../models/IChildren";

interface ITabPanel extends IChildren {
    selected?: boolean;
    id: string;
    ariaLabelledBy: string;
    render?: boolean;
}

export const TabPanel = ({ selected, id, ariaLabelledBy, children, render = true }: ITabPanel) => (

    render ?
        <div className={"tab-pane fade show " + (selected ? "active" : "")} id={id} role="tabpanel" aria-labelledby={ariaLabelledBy}>
            {children}
        </div>
        : null
)
