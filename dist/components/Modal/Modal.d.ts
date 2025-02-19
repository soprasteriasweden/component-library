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
    animate?: boolean;
    scrollable?: boolean;
}
declare enum ModalSize {
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
declare const Modal: ({ header, children, id, modalSize, preventCloseOnOutsideClick, animate, scrollable }: IModal) => React.JSX.Element;
export { Modal, ModalBody, ModalFooter, ModalSize };
