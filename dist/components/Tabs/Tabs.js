import * as React from "react";
import { TabContent } from "./TabContent";
import { TabLink } from "./TabLink";
import { TabPanel } from "./TabPanel";
import "./Tabs.style.scss";
var Tabs = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement("nav", null,
            React.createElement("div", { className: "nav nav-tabs tabs-custom-styling", id: "nav-tab", role: "tablist" }, children))));
};
export { Tabs, TabContent, TabLink, TabPanel };
