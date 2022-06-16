import * as React from "react";

interface ITabLink {
    selected?: boolean;
    id: string;
    text: string;
    href: string;
    render?: boolean;
}

export const TabLink = ({ selected, href, id, text, render = true }: ITabLink) => (
    render ?
        <a className={"nav-item nav-link " + (selected ? "active" : "")} id={id} data-toggle="tab" href={"#" + href} role="tab" aria-controls={href} aria-selected={selected}>{text}</a>
        : null
)