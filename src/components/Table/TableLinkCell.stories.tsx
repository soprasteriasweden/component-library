import * as React from "react";
import { MemoryRouter} from "react-router-dom";
import { Table } from "./Table";
import { TableLinkCell } from "./TableLinkCell";
import { Modal, ModalBody, ModalFooter } from "../Modal/Modal";
import { CustomButton, ButtonType } from "../CustomButton/CustomButton";

export default {
    title: "Components/Table/TableLinkCell",
    component: TableLinkCell,
};

const TableExample = ({ children }: { children: React.ReactNode }) => (
    <Table>
        <thead>
            <tr>
                <th scope="col">Länk</th>
                <th scope="col">Ärende</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>{children}</tbody>
    </Table>
);

export const ExternalLink = () => (
    <TableExample>
        <tr>
            <TableLinkCell href="https://example.com" linkText="Extern länk" />
            <td>Ärende 123</td>
            <td>Pågår</td>
        </tr>
        <tr>
            <TableLinkCell href="https://example.com" linkText="Extern länk" />
            <td>Ärende 456</td>
            <td>Avslutat</td>
        </tr>
    </TableExample>
);

export const RoutingLink = () => (
    <MemoryRouter>
        <TableExample>
            <tr>
                <TableLinkCell to="/arenden/123" linkText="Intern länk" />
                <td>Ärende 123</td>
                <td>Pågår</td>
            </tr>
            <tr>
                <TableLinkCell to="/arenden/456" linkText="Intern länk" />
                <td>Ärende 456</td>
                <td>Avslutat</td>
            </tr>
        </TableExample>
    </MemoryRouter>
);

export const OnClick = () => {
    const [selected, setSelected] = React.useState<string | null>(null);

    return (
        <>
            <TableExample>
                <tr>
                    <TableLinkCell linkText="Skriv till konsolen" onClick={() => console.log("Du klickade på Ärende 123")} />
                    <td>Ärende 123</td>
                    <td>Pågår</td>
                </tr>
                <tr>
                    <TableLinkCell linkText="Öppna modal" onClick={() => setSelected("Ärende 456")} />
                    <td>Ärende 456</td>
                    <td>Avslutat</td>
                </tr>
            </TableExample>
            <Modal modalId="table-link-cell-modal" header={selected ?? ""} isOpen={selected !== null} onClose={() => setSelected(null)}>
                <ModalBody>Detaljer för {selected}</ModalBody>
                <ModalFooter>
                    <CustomButton buttonText="Stäng" buttonType={ButtonType.general} data-bs-dismiss="modal" />
                </ModalFooter>
            </Modal>
        </>
    );
};
