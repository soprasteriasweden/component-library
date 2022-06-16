import * as React from "react";
import { IChildren } from "../../models/IChildren";

export const TabContent = ({ children }: IChildren) => (
    <div className="tab-content" id="nav-tabContent">
        {children}
    </div>
)