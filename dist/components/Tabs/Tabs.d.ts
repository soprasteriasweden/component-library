/// <reference types="react" />
import { TabContent } from "./TabContent";
import { TabLink } from "./TabLink";
import { TabPanel } from "./TabPanel";
import { IChildren } from "../../models/IChildren";
import "../../assets/styles/Tabs.style.scss";
declare const Tabs: ({ children }: IChildren) => JSX.Element;
export { Tabs, TabContent, TabLink, TabPanel };
