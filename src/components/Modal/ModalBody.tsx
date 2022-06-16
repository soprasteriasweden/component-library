import * as React from "react";
import { IChildren } from "../../models/IChildren";

export const ModalBody = ({ children }: IChildren) => (
    <div className="modal-body">
        {children}
    </div>
)