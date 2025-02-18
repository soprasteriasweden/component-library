import * as React from "react";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";
var ModalSize;
(function (ModalSize) {
    ModalSize["small"] = "modal-sm";
    ModalSize["normal"] = "";
    ModalSize["large"] = "modal-lg";
    ModalSize["extraLarge"] = "modal-xl";
})(ModalSize || (ModalSize = {}));
const Modal = ({ header, children, id, modalSize = ModalSize.normal, preventCloseOnOutsideClick }) => (React.createElement("div", { className: "modal fade", id: id, tabIndex: -1, "aria-labelledby": `${id}-label`, "aria-hidden": "true", "data-bs-backdrop": preventCloseOnOutsideClick ? "static" : "true" },
    React.createElement("div", { className: `modal-dialog modal-dialog-centered ${modalSize}`, role: "document" },
        React.createElement("div", { className: "modal-content" },
            React.createElement("div", { className: "modal-header" },
                React.createElement("h4", { className: "modal-title", id: `${id}-label` }, header),
                React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })),
            children))));
export { Modal, ModalBody, ModalFooter, ModalSize };
