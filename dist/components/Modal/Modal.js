import React, { useEffect, useRef } from "react";
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
export const Modal = ({ header, children, modalId, isOpen, onClose, modalSize = ModalSize.normal, preventCloseOnOutsideClick = true, scrollable = false, animate = true }) => {
    const modalRef = useRef(null);
    const bsModal = useRef(null);
    useEffect(() => {
        const el = modalRef.current;
        if (!el)
            return;
        bsModal.current = new bootstrap.Modal(el, {
            backdrop: preventCloseOnOutsideClick ? "static" : true,
            keyboard: true,
        });
        el.addEventListener("hidden.bs.modal", () => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        });
        return () => {
            var _a;
            el.removeEventListener("hidden.bs.modal", () => {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            });
            (_a = bsModal.current) === null || _a === void 0 ? void 0 : _a.dispose();
            bsModal.current = null;
        };
    }, []);
    useEffect(() => {
        const el = modalRef.current;
        if (!el || !bsModal.current)
            return;
        if (isOpen) {
            bsModal.current.show();
        }
        else {
            bsModal.current.hide();
        }
    }, [isOpen]);
    return createPortal(React.createElement("div", { className: `modal ${animate ? "fade" : ""}`, tabIndex: -1, ref: modalRef, id: modalId, "aria-labelledby": `${modalId}-label`, "aria-hidden": "true" },
        React.createElement("div", { className: `modal-dialog modal-dialog-centered ${modalSize} ${scrollable ? "modal-dialog-scrollable" : ""}` },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("h4", { className: "modal-title", id: `${modalId}-label` }, header),
                    React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })),
                children))), document.body);
};
export { ModalBody, ModalFooter };
