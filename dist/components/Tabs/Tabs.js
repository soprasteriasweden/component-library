import { jsx as _jsx } from "react/jsx-runtime";
import { TabContent } from "./TabContent";
import { TabLink } from "./TabLink";
import { TabPanel } from "./TabPanel";
import "../../assets/styles/Tabs.style.scss";
const Tabs = ({ children }) => (_jsx("div", { children: _jsx("nav", { children: _jsx("div", { className: "nav nav-tabs tabs-custom-styling", id: "nav-tab", role: "tablist", children: children }) }) }));
export { Tabs, TabContent, TabLink, TabPanel };
