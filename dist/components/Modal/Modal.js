import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as bootstrap from "bootstrap";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";
export var ModalSize;
(function (ModalSize) {
    ModalSize["small"] = "modal-sm";
    ModalSize["normal"] = "";
    ModalSize["large"] = "modal-lg";
    ModalSize["extraLarge"] = "modal-xl";
    ModalSize["full"] = "modal-fullscreen";
    ModalSize["fullSm"] = "modal-fullscreen-sm-down";
    ModalSize["fullMd"] = "modal-fullscreen-md-down";
    ModalSize["fullLg"] = "modal-fullscreen-lg-down";
    ModalSize["fullXl"] = "modal-fullscreen-xl-down";
})(ModalSize || (ModalSize = {}));
export const Modal = ({ header, children, modalId, isOpen, onClose, modalSize = ModalSize.normal, preventCloseOnOutsideClick = true, scrollable = false, animate = true, resetOnClose = true, hideCloseButton = false, }) => {
    const modalRef = useRef(null);
    const bsModal = useRef(null);
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
        if (!mounted || !modalRef.current)
            return;
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
            var _a;
            cleanupBody();
            (_a = onCloseRef.current) === null || _a === void 0 ? void 0 : _a.call(onCloseRef);
            if (resetOnCloseRef.current)
                setContentKey((k) => k + 1);
        };
        el.addEventListener("hidden.bs.modal", onHidden);
        setTimeout(() => {
            if (isOpen)
                instance.show();
            else
                instance.hide();
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
        if (!instance)
            return;
        isOpen ? instance.show() : instance.hide();
    }, [isOpen]);
    if (!mounted)
        return null;
    return createPortal(React.createElement("div", { className: `modal ${animate ? "fade" : ""}`, tabIndex: -1, ref: modalRef, id: modalId, "aria-labelledby": `${modalId}-label`, "aria-hidden": "true" },
        React.createElement("div", { className: `modal-dialog modal-dialog-centered ${modalSize} ${scrollable ? "modal-dialog-scrollable" : ""}` },
            React.createElement("div", { className: "modal-content", key: contentKey },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("h4", { className: "modal-title", id: `${modalId}-label` }, header),
                    !hideCloseButton && (React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }))),
                children))), document.body);
};
export { ModalBody, ModalFooter };
