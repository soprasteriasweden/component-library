import React from "react";
import { IChildren } from "../../models/IChildren";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import "../../assets/styles/Modal.style.scss";
export declare enum ModalSize {
    small = "modal-sm",
    normal = "",
    large = "modal-lg",
    extraLarge = "modal-xl",
    full = "modal-fullscreen",
    fullSm = "modal-fullscreen-sm-down",
    fullMd = "modal-fullscreen-md-down",
    fullLg = "modal-fullscreen-lg-down",
    fullXl = "modal-fullscreen-xl-down"
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
}
export declare const Modal: React.FC<IModal>;
export { ModalBody, ModalFooter };
