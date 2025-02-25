import * as React from "react";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";
import * as bootstrap from "bootstrap";
var ModalSize;
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
const Modal = ({ header, children, id, modalSize = ModalSize.normal, preventCloseOnOutsideClick = true, animate = true, scrollable = false, closeModal }) => {
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
    return (React.createElement("div", { className: `modal ${animate ? "fade" : ""}`, id: id, tabIndex: -1, "aria-labelledby": `${id}-label`, "aria-hidden": "true", "data-bs-backdrop": preventCloseOnOutsideClick ? "static" : "true" },
        React.createElement("div", { className: `modal-dialog modal-dialog-centered
                    ${modalSize} 
                    ${scrollable ? "modal-dialog-scrollable" : ""}`, role: "document" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("h4", { className: "modal-title", id: `${id}-label` }, header),
                    React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close", onClick: closeModal ? closeModal : undefined })),
                children))));
};
export { Modal, ModalBody, ModalFooter, ModalSize };
