import * as React from "react";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "./Modal.style.scss";
var ModalSize;
(function (ModalSize) {
    ModalSize["small"] = "modal-sm";
    ModalSize["normal"] = "";
    ModalSize["large"] = "modal-lg";
    ModalSize["extraLarge"] = "modal-xl";
})(ModalSize || (ModalSize = {}));
var Modal = function (_a) {
    var header = _a.header, children = _a.children, id = _a.id, _b = _a.modalSize, modalSize = _b === void 0 ? ModalSize.normal : _b, preventCloseOnOutsideClick = _a.preventCloseOnOutsideClick;
    return (React.createElement("div", { className: "modal", "data-backdrop": preventCloseOnOutsideClick ? "static" : "", role: "dialog", id: id },
        React.createElement("div", { className: "modal-dialog modal-dialog-centered " + modalSize, role: "document" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("h4", { className: "modal-title" }, header)),
                children))));
};
export { Modal, ModalBody, ModalFooter, ModalSize };
