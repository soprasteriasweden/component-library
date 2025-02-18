import * as React from "react";
import { IChildren } from "../../models/IChildren";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";

interface IModal extends IChildren {
    header: string;
    id: string;
    modalSize?: ModalSize;
    preventCloseOnOutsideClick?: boolean;
    animate?: boolean;
    scrollable?: boolean;
}

enum ModalSize {
    small = "modal-sm",
    normal = "",
    large = "modal-lg",
    extraLarge = "modal-xl",
    full = "modal-fullscreen",
    fullSm = "modal-fullscreen-sm-down",
    fullMd = "modal-fullscreen-md-down",
    fullLg = "modal-fullscreen-lg-down",
    fullXl = "modal-fullscreen-xl-down"
}

const Modal = ({ 
    header, 
    children, 
    id, 
    modalSize = ModalSize.normal, 
    preventCloseOnOutsideClick, 
    animate = true, 
    scrollable = false
}: IModal) => {
    
    return (
        <div
            className={`modal ${animate ? "fade" : ""}`}  // ✅ Enable/disable animation
            id={id}
            tabIndex={-1}
            aria-labelledby={`${id}-label`}
            aria-hidden="true"
            data-bs-backdrop={preventCloseOnOutsideClick ? "static" : "true"}
        >
            <div 
                className={`modal-dialog modal-dialog-centered
                    ${modalSize} 
                    ${scrollable ? "modal-dialog-scrollable" : ""}`
                }
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id={`${id}-label`}>{header}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export {
    Modal,
    ModalBody,
    ModalFooter,
    ModalSize
};
