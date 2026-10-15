import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
export const Tooltip = ({ title, placement = "bottom", customClass = "", children }) => {
    const tooltipRef = useRef(null);
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
    return (React.createElement("span", { ref: tooltipRef, tabIndex: title ? 0 : undefined, style: { cursor: "pointer" } }, children));
};
