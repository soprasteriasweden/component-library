interface ITabLink {
    selected?: boolean;
    id: string;
    text: string;
    href: string;
    render?: boolean;
}
export declare const TabLink: ({ selected, href, id, text, render }: ITabLink) => import("react/jsx-runtime").JSX.Element | null;
export {};
