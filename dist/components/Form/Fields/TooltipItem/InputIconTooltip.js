import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import "../../../../assets/styles/TooltipItem.style.scss";
export const InputIconTooltip = ({ description, icon }) => {
    const tooltipRef = useRef(null);
    let tooltipInstance = null;
    useEffect(() => {
        if (tooltipRef.current) {
            tooltipInstance = new bootstrap.Tooltip(tooltipRef.current, {
                title: description,
                placement: "right",
                trigger: "hover",
                html: true,
            });
        }
        return () => {
            if (tooltipInstance) {
                tooltipInstance.dispose();
            }
        };
    }, [description]);
    return (React.createElement("div", { className: "tooltip-item" },
        React.createElement("p", null,
            React.createElement("span", { ref: tooltipRef, className: "tooltip-trigger" },
                React.createElement("span", { className: "input-group-text", style: { backgroundColor: "transparent", border: "none" } },
                    React.createElement(FontAwesomeIcon, { icon: icon }))))));
};
