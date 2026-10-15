import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
export const Tooltip = ({ title, placement = "bottom", customClass = "", trigger = "hover focus", children }) => {
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
            trigger
        });
        return () => tooltip.dispose();
    }, [title, placement, customClass, trigger]);
    return (React.createElement("span", { ref: tooltipRef, tabIndex: title ? 0 : undefined, style: { cursor: "pointer" } }, children));
};
