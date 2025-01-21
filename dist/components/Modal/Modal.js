import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const Modal = ({ header, children, id, modalSize = ModalSize.normal, preventCloseOnOutsideClick }) => (_jsx("div", { className: "modal", "data-backdrop": preventCloseOnOutsideClick ? "static" : "", role: "dialog", id: id, children: _jsx("div", { className: "modal-dialog modal-dialog-centered " + modalSize, role: "document", children: _jsxs("div", { className: "modal-content", children: [_jsx("div", { className: "modal-header", children: _jsx("h4", { className: "modal-title", children: header }) }), children] }) }) }));
export { Modal, ModalBody, ModalFooter, ModalSize };
