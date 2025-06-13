import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as bootstrap from "bootstrap";
import { IChildren } from "../../models/IChildren";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";

export enum ModalSize {
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

interface IModal extends IChildren {
    header: string;
    modalId: string;
    isOpen: boolean;
    onClose?: () => void;
    modalSize?: ModalSize;
    preventCloseOnOutsideClick?: boolean;
    scrollable?: boolean;
    animate?: boolean;
}

export const Modal: React.FC<IModal> = ({
    header,
    children,
    modalId,
    isOpen,
    onClose,
    modalSize = ModalSize.normal,
    preventCloseOnOutsideClick = true,
    scrollable = false,
    animate = true
}) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const bsModal = useRef<bootstrap.Modal | null>(null);

    useEffect(() => {
        const el = modalRef.current;
        if (!el) return;

        bsModal.current = new bootstrap.Modal(el, {
            backdrop: preventCloseOnOutsideClick ? "static" : true,
            keyboard: true,
        });

        el.addEventListener("hidden.bs.modal", () => {
            onClose?.();
        });

        return () => {
            el.removeEventListener("hidden.bs.modal", () => {
                onClose?.();
            });
            bsModal.current?.dispose();
            bsModal.current = null;
        };
    }, []);

    useEffect(() => {
        const el = modalRef.current;
        if (!el || !bsModal.current) return;

        if (isOpen) {
            bsModal.current.show();
        } else {
            bsModal.current.hide();
        }
    }, [isOpen]);

    return createPortal(
        <div
            className={`modal ${animate ? "fade" : ""}`}
            tabIndex={-1}
            ref={modalRef}
            id={modalId}
            aria-labelledby={`${modalId}-label`}
            aria-hidden="true"
        >
            <div className={`modal-dialog modal-dialog-centered ${modalSize} ${scrollable ? "modal-dialog-scrollable" : ""}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id={`${modalId}-label`}>{header}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export { ModalBody, ModalFooter };
