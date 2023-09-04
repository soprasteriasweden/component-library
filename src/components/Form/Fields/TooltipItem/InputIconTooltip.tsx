import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../../../../assets/styles/TooltipItem.style.scss";

interface IProps {
    description: string;
    icon: IconDefinition;
}

export const InputIconTooltip: React.FC<IProps> = ({ description, icon }) => {
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
            <p>
                <span
                    id={tooltipId}
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="right"
                    data-original-title={description}
                    onMouseOver={onTooltipMouseOver}
                    onClick={onTooltipClick}
                >

                    <span className="input-group-text" style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <FontAwesomeIcon icon={icon} />
                    </span>

                </span>
            </p>
        </div>
    );
};



