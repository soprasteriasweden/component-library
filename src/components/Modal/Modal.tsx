import * as React from "react";
import { IChildren } from "../../models/IChildren";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";
import * as bootstrap from "bootstrap";

interface IModal extends IChildren {
    header: string;
    id: string;
    modalSize?: ModalSize;
    preventCloseOnOutsideClick?: boolean;
    animate?: boolean;
    scrollable?: boolean;
    closeModal?: () => void;
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
    preventCloseOnOutsideClick = true, 
    animate = true, 
    scrollable = false,
    closeModal
}: IModal) => {

    React.useEffect(() => {
        const modalElement = document.getElementById(id);
        if (modalElement) {
            const bsModal = new bootstrap.Modal(modalElement);

            return () => {
                bsModal.hide();
                bsModal.dispose();
            };
        }
    }, [id]);
    
    return (
        <div
            className={`modal ${animate ? "fade" : ""}`}
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
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal ? closeModal : undefined}></button>
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
