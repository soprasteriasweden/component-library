import * as React from "react";
import { Modal, ModalBody, ModalFooter, ModalSize } from "./Modal";
import { CustomButton, ButtonType } from "../CustomButton/CustomButton";
import * as bootstrap from "bootstrap";

export default {
    title: "Components/Modal",
    component: Modal,
};

const OpenModalButton = ({ modalId, text }: { modalId: string; text: string }) => {
    const openModal = () => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            const bsModal = new bootstrap.Modal(modalElement);
            bsModal.show();
        }
    };

    return <CustomButton buttonText={text} buttonType={ButtonType.general} onClick={openModal} />;
};

export const ModalSmall = () => (
    <div>
        <OpenModalButton modalId="modalSmall" text="Open Small Modal" />
        <Modal header="Small Modal" id="modalSmall" modalSize={ModalSize.small}>
            <ModalBody>Content...</ModalBody>
            <ModalFooter>Footer</ModalFooter>
        </Modal>
    </div>
);

export const ModalNormalPreventCloseOnOutsideClickFalse = () => (
    <div>
        <OpenModalButton modalId="modalNormalPreventCloseOnOutsideClickFalse" text="Open Normal Modal (can close outside)" />
        <Modal header="Normal Modal" id="modalNormalPreventCloseOnOutsideClickFalse" modalSize={ModalSize.normal} preventCloseOnOutsideClick={false}>
            <ModalBody>Click outside modal to close</ModalBody>
            <ModalFooter>Footer</ModalFooter>
        </Modal>
    </div>
);

export const ModalLarge = () => (
    <div>
        <OpenModalButton modalId="modalLarge" text="Open Large Modal" />
        <Modal header="Large Modal" id="modalLarge" modalSize={ModalSize.large}>
            <ModalBody>Content...</ModalBody>
            <ModalFooter>Footer Content</ModalFooter>
        </Modal>
    </div>
);

export const ModalFullscreen = () => (
    <div>
        <OpenModalButton modalId="modalFullscreen" text="Open Fullscreen Modal" />
        <Modal header="Fullscreen Modal" id="modalFullscreen" modalSize={ModalSize.full}>
            <ModalBody>Fullscreen content...</ModalBody>
            <ModalFooter>Footer Content</ModalFooter>
        </Modal>
    </div>
);

export const ModalScrollable = () => (
    <div>
        <OpenModalButton modalId="modalScrollable" text="Open Scrollable Modal" />
        <Modal header="Scrollable Modal" id="modalScrollable" modalSize={ModalSize.normal} scrollable={true}>
            <ModalBody>
                {Array(25).fill(<p>Rader...</p>)} {/* ✅ Generate 25 rows dynamically */}
            </ModalBody>
            <ModalFooter>Footer Content</ModalFooter>
        </Modal>
    </div>
);
