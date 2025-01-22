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
const Modal = ({ header, children, id, modalSize = ModalSize.normal, preventCloseOnOutsideClick }) => (React.createElement("div", { className: "modal", "data-backdrop": preventCloseOnOutsideClick ? "static" : "", role: "dialog", id: id },
    React.createElement("div", { className: "modal-dialog modal-dialog-centered " + modalSize, role: "document" },
        React.createElement("div", { className: "modal-content" },
            React.createElement("div", { className: "modal-header" },
                React.createElement("h4", { className: "modal-title" }, header)),
            children))));
export { Modal, ModalBody, ModalFooter, ModalSize };
