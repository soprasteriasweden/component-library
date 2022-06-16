import * as React from "react";
import { IChildren } from "../../models/IChildren";

export const ModalFooter = ({ children }: IChildren) => (
    <div className="modal-footer">
        {children}
    </div>
)