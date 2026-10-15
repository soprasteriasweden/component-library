import React from "react";
interface IProps {
    title: string;
    placement?: "top" | "bottom" | "left" | "right";
    customClass?: string;
    children: React.ReactNode;
}
export declare const Tooltip: React.FC<IProps>;
export {};
