import React from 'react';
import "../../../../assets/styles/TooltipItem.style.scss";

interface IProps {
    title: string;
    description: string;
    showDisc?: boolean;
}

export const TooltipItem: React.FC<IProps> = ({ title, description, showDisc }) => {
    const tooltipId = `a${Math.floor(Math.random() * 100000)}`;

    const myWindow: any = window;

    const onTooltipMouseOver = () => {
        myWindow.$(`#${tooltipId}`).tooltip("enable");
        myWindow.$(`#${tooltipId}`).tooltip("show");
    }

    const onTooltipClick = () => {
        myWindow.$(`#${tooltipId}`).tooltip("hide");
    }

    return (
        <div className="tooltip-item">
            <p className={showDisc ? "show-disc" : ""}>
                <span
                    id={tooltipId}
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="right"
                    data-original-title={description}
                    onMouseOver={onTooltipMouseOver}
                    onClick={onTooltipClick}
                >
                    {title}
                </span>
            </p>
        </div>
    );
};



