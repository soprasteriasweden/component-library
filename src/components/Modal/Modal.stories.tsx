import * as React from "react";
import { Meta } from "@storybook/react";
import { Modal, ModalBody, ModalFooter, ModalSize } from "./Modal";
import { CustomButton, ButtonType } from "../CustomButton/CustomButton";

export default {
    title: "Components/Modal",
    component: Modal,
} as Meta;

const ModalExample = ({
    modalId,
    modalSize,
    scrollable = false,
    preventCloseOnOutsideClick = true,
    content = "Innehåll...",
}: {
    modalId: string;
    modalSize: ModalSize;
    scrollable?: boolean;
    preventCloseOnOutsideClick?: boolean;
    content?: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        console.log("Open modal");
        setIsOpen(true);
    }

    const handleClose = () => {
        console.log("Close modal");
        setIsOpen(false);
    }

    return (
        <>
            <CustomButton
                buttonText="Öppna modal"
                buttonType={ButtonType.general}
                onClick={handleOpen}
            />
            <Modal
                modalId={modalId}
                header="Exempelmodal"
                modalSize={modalSize}
                scrollable={scrollable}
                preventCloseOnOutsideClick={preventCloseOnOutsideClick}
                isOpen={isOpen}
                onClose={handleClose}
            >
                <ModalBody>{content}</ModalBody>
                <ModalFooter>
                    <CustomButton
                        buttonText="Stäng"
                        buttonType={ButtonType.general}
                        data-bs-dismiss="modal"
                    />
                </ModalFooter>
            </Modal>
        </>
    );
};

export const ModalSmall = () => (
    <ModalExample modalId="modal-small" modalSize={ModalSize.small} />
);

export const ModalNormalPreventCloseOnOutsideClickFalse = () => (
    <ModalExample
        modalId="modal-normal"
        modalSize={ModalSize.normal}
        preventCloseOnOutsideClick={false}
    />
);

export const ModalLarge = () => (
    <ModalExample modalId="modal-large" modalSize={ModalSize.large} content={
        <><input type="text" className="form-control form-control-sm"></input></>
        }/>
);

export const ModalFullscreen = () => (
    <ModalExample modalId="modal-fullscreen" modalSize={ModalSize.full} />
);

export const ModalScrollable = () => (
    <ModalExample
        modalId="modal-scrollable"
        modalSize={ModalSize.normal}
        scrollable={true}
        content={
            <>
                {Array.from({ length: 40 }, (_, i) => (
                    <p key={i}>Rader {i + 1}</p>
                ))}
            </>
        }
    />
);
