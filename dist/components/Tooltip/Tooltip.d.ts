import React from "react";
interface IProps {
    title: string;
    placement?: "top" | "bottom" | "left" | "right";
    customClass?: string;
    trigger?: "hover focus" | "click" | "hover" | "focus" | "manual" | "click hover" | "click focus" | "click hover focus";
    children: React.ReactNode;
}
export declare const Tooltip: React.FC<IProps>;
export {};
