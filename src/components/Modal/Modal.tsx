import React, { useEffect, useRef, useState } from "react";
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
    fullXl = "modal-fullscreen-xl-down",
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
    resetOnClose?: boolean;
    hideCloseButton?: boolean;
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
    animate = true,
    resetOnClose = true,
    hideCloseButton = false,
}) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const bsModal = useRef<bootstrap.Modal | null>(null);
    const [mounted, setMounted] = useState(false);

    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    const resetOnCloseRef = useRef(resetOnClose);
    useEffect(() => {
        resetOnCloseRef.current = resetOnClose;
    }, [resetOnClose]);

    const [contentKey, setContentKey] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !modalRef.current) return;

        const el = modalRef.current;
        const instance = new bootstrap.Modal(el, {
            backdrop: preventCloseOnOutsideClick ? "static" : true,
            keyboard: true,
        });
        bsModal.current = instance;

        const cleanupBody = () => {
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };

        const onHidden = () => {
            cleanupBody();
            onCloseRef.current?.();
            if (resetOnCloseRef.current) setContentKey((k) => k + 1);
        };
        el.addEventListener("hidden.bs.modal", onHidden);

        setTimeout(() => {
            if (isOpen) instance.show();
            else instance.hide();
        }, 0);

        return () => {
            el.removeEventListener("hidden.bs.modal", onHidden);
            instance.dispose();
            bsModal.current = null;
            cleanupBody();
        };
    }, [mounted, preventCloseOnOutsideClick]);

    useEffect(() => {
        const instance = bsModal.current;
        if (!instance) return;
        isOpen ? instance.show() : instance.hide();
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <div
            className={`modal ${animate ? "fade" : ""}`}
            tabIndex={-1}
            ref={modalRef}
            id={modalId}
            aria-labelledby={`${modalId}-label`}
            aria-hidden="true"
        >
            <div
                className={`modal-dialog modal-dialog-centered ${modalSize} ${scrollable ? "modal-dialog-scrollable" : ""
                    }`}
            >
                <div className="modal-content" key={contentKey}>
                    <div className="modal-header">
                        <h4 className="modal-title" id={`${modalId}-label`}>
                            {header}
                        </h4>
                        {!hideCloseButton && ( 
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export { ModalBody, ModalFooter };