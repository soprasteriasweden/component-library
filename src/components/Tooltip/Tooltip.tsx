import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";

interface IProps {
    title: string;
    placement?: "top" | "bottom" | "left" | "right";
    customClass?: string;
    children: React.ReactNode;
}

export const Tooltip: React.FC<IProps> = ({ title, placement = "bottom", customClass = "", children }) => {
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
            trigger: "hover focus"
        });
        return () => tooltip.dispose();
    }, [title, placement, customClass]);

    return (
        <span ref={tooltipRef} tabIndex={title ? 0 : undefined} style={{ cursor: "pointer" }}>
            {children}
        </span>
    );
};
