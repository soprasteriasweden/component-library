import * as React from "react";
interface ITabLink {
    selected?: boolean;
    id: string;
    text: string;
    href: string;
    render?: boolean;
}
export declare const TabLink: ({ selected, href, id, text, render }: ITabLink) => React.JSX.Element | null;
export {};
