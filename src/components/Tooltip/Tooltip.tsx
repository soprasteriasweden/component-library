import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";

interface IProps {
    title: string;
    placement?: "top" | "bottom" | "left" | "right";
    customClass?: string;
    trigger?: "hover focus" | "click" | "hover" | "focus" | "manual" | "click hover" | "click focus" | "click hover focus";
    children: React.ReactNode;
}

export const Tooltip: React.FC<IProps> = ({ title, placement = "bottom", customClass = "", trigger = "hover focus", children }) => {
    const tooltipRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!tooltipRef.current || !title) {
            return;
        }
        const tooltip = new bootstrap.Tooltip(tooltipRef.current, {
            title,
            placement,
            customClass,
            animation: false,
            html: true,
            trigger
        });
        return () => tooltip.dispose();
    }, [title, placement, customClass, trigger]);

    return (
        <span ref={tooltipRef} tabIndex={title ? 0 : undefined}>
            {children}
        </span>
    );
};
