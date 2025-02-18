import React from "react";
import { Modal, ModalBody, ModalFooter, ModalSize } from "./Modal";
import * as bootstrap from "bootstrap";

export default {
    title: "Components/Modal",
    component: Modal,
};


export const ModalSmall = () => {
    const openModal = () => {
        const modalElement = document.getElementById("modalSmall");
        if (modalElement) {
            const bsModal = new bootstrap.Modal(modalElement);
            bsModal.show();
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>Open Small Modal</button>
            <Modal header="Small Modal" id="modalSmall" modalSize={ModalSize.small}>
                <ModalBody>Content...</ModalBody>
                <ModalFooter>Footer</ModalFooter>
            </Modal>
        </div>
    );
};

export const ModalLarge = () => {
    const openModal = () => {
        const modalElement = document.getElementById("modalLarge");
        if (modalElement) {
            const bsModal = new bootstrap.Modal(modalElement);
            bsModal.show();
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>Open Large Modal</button>
            <Modal header="Large Modal" id="modalLarge" modalSize={ModalSize.large}>
                <ModalBody>Content...</ModalBody>
                <ModalFooter>Footer Content</ModalFooter>
            </Modal>
        </div>
    );
};

export const ModalFullscreen = () => {
    const openModal = () => {
        const modalElement = document.getElementById("modalFullscreen");
        if (modalElement) {
            const bsModal = new bootstrap.Modal(modalElement);
            bsModal.show();
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>Open Fullscreen Modal</button>
            <Modal header="Fullscreen Modal" id="modalFullscreen" modalSize={ModalSize.full}>
                <ModalBody>Fullscreen content...</ModalBody>
                <ModalFooter>Footer Content</ModalFooter>
            </Modal>
        </div>
    );
};

export const ModalScrollable = () => {
    const openModal = () => {
        const modalElement = document.getElementById("modalScrollable");
        if (modalElement) {
            const bsModal = new bootstrap.Modal(modalElement);
            bsModal.show();
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>Open Scrollable Modal</button>
            <Modal header="Scrollable Modal" id="modalScrollable" modalSize={ModalSize.normal} scrollable={true}>
                <ModalBody>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                    <p>Rader...</p>
                </ModalBody>
                <ModalFooter>Footer Content</ModalFooter>
            </Modal>
        </div>
    );
};
