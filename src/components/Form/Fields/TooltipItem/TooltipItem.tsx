import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import "../../../../assets/styles/TooltipItem.style.scss";

interface IProps {
    title: string;
    description: string;
    showDisc?: boolean;
}

export const TooltipItem: React.FC<IProps> = ({ title, description, showDisc }) => {
    const tooltipRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (tooltipRef.current) {
            const tooltip = new bootstrap.Tooltip(tooltipRef.current, {
                title: description,
                placement: "right",
                html: true,
            });

            return () => {
                tooltip.dispose();  // ✅ Cleanup tooltip on unmount
            };
        }
    }, [description]);

    return (
        <div className="tooltip-item">
            <p className={showDisc ? "show-disc" : ""}>
                <span
                    ref={tooltipRef}
                    className="tooltip-trigger"
                    data-bs-toggle="tooltip"
                >
                    {title}
                </span>
            </p>
        </div>
    );
};
