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
    showCloseButton?: boolean;
}
declare enum ModalSize {
    small = "modal-sm",
    normal = "",
    large = "modal-lg",
    extraLarge = "modal-xl"
}
declare const Modal: ({ header, children, id, modalSize, preventCloseOnOutsideClick, showCloseButton }: IModal) => React.JSX.Element;
export { Modal, ModalBody, ModalFooter, ModalSize };
