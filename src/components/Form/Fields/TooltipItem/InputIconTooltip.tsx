import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import "../../../../assets/styles/TooltipItem.style.scss";

interface IProps {
    description: string;
    icon: IconDefinition;
}

export const InputIconTooltip: React.FC<IProps> = ({ description, icon }) => {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    let tooltipInstance: bootstrap.Tooltip | null = null;

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

    return (
        <div className="tooltip-item">
            <p>
                <span ref={tooltipRef} className="tooltip-trigger">
                    <span className="input-group-text" style={{ backgroundColor: "transparent", border: "none" }}>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                </span>
            </p>
        </div>
    );
};
