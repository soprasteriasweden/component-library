import * as React from "react";
import { IChildren } from "../../models/IChildren";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";

interface IModal extends IChildren {
    header: string;
    id: string;
    modalSize?: ModalSize;
    preventCloseOnOutsideClick?: boolean;
}

enum ModalSize {
    small = "modal-sm",
    normal = "",
    large = "modal-lg",
    extraLarge = "modal-xl"
}

const Modal = ({ header, children, id, modalSize = ModalSize.normal, preventCloseOnOutsideClick }: IModal) => (
    <div className="modal" data-backdrop={preventCloseOnOutsideClick ? "static" : ""} role="dialog" id={id}>
        <div className={"modal-dialog modal-dialog-centered " + modalSize} role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{header}</h4>
                </div>
                {children}
            </div>
        </div>
    </div>
)

export {
    Modal,
    ModalBody,
    ModalFooter,
    ModalSize
}