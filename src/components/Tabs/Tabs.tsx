import * as React from "react";
import { TabContent } from "./TabContent";
import { TabLink } from "./TabLink";
import { TabPanel } from "./TabPanel";
import { IChildren } from "../../models/IChildren";
import "./Tabs.style.scss";

const Tabs = ({ children }: IChildren) => (
    <div>
        <nav>
            <div className="nav nav-tabs tabs-custom-styling" id="nav-tab" role="tablist">
                {children}
            </div>
        </nav>
    </div>
)

export {
    Tabs,
    TabContent,
    TabLink,
    TabPanel
}