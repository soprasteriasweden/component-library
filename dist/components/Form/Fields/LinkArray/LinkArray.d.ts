import * as React from "react";
interface ILinkFieldArray {
    existingLinks: ILink[] | undefined;
    name: string;
    required: boolean;
    label?: string;
}
interface ILink {
    id: number;
    url: string;
    description: string;
}
export declare const LinkArray: React.FunctionComponent<ILinkFieldArray>;
export {};
