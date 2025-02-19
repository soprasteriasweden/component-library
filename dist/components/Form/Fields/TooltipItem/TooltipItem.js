import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import "../../../../assets/styles/TooltipItem.style.scss";
export const TooltipItem = ({ title, description, showDisc }) => {
    const tooltipRef = useRef(null);
    useEffect(() => {
        if (tooltipRef.current) {
            const tooltip = new bootstrap.Tooltip(tooltipRef.current, {
                title: description,
                placement: "right",
                html: true,
            });
            return () => {
                tooltip.dispose(); // ✅ Cleanup tooltip on unmount
            };
        }
    }, [description]);
    return (React.createElement("div", { className: "tooltip-item" },
        React.createElement("p", { className: showDisc ? "show-disc" : "" },
            React.createElement("span", { ref: tooltipRef, className: "tooltip-trigger", "data-bs-toggle": "tooltip" }, title))));
};
