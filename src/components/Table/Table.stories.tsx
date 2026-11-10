import * as React from "react";
import { Table } from "./Table";

export default {
    title: "Components/Table/Table",
    component: Table,
};

const TableExample = ({ hoverableRows, stripedRows }: { hoverableRows: boolean; stripedRows?: boolean | null }) => (
    <Table hoverableRows={hoverableRows} stripedRows={stripedRows}>
        <thead>
            <tr>
                <th scope="col">Ärende</th>
                <th scope="col">Beskrivning</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ärende 123</td>
                <td>Ansökan om tillstånd</td>
                <td>Pågår</td>
            </tr>
            <tr>
                <td>Ärende 456</td>
                <td>Uppdatering av uppgifter</td>
                <td>Avslutat</td>
            </tr>
            <tr>
                <td>Ärende 789</td>
                <td>Komplettering av ansökan</td>
                <td>Väntar</td>
            </tr>
        </tbody>
    </Table>
);

const TableWithoutProps = () => (
    <Table>
        <thead>
            <tr>
                <th scope="col">Ärende</th>
                <th scope="col">Beskrivning</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ärende 123</td>
                <td>Ansökan om tillstånd</td>
                <td>Pågår</td>
            </tr>
            <tr>
                <td>Ärende 456</td>
                <td>Uppdatering av uppgifter</td>
                <td>Avslutat</td>
            </tr>
            <tr>
                <td>Ärende 789</td>
                <td>Komplettering av ansökan</td>
                <td>Väntar</td>
            </tr>
        </tbody>
    </Table>
);

export const WithoutProps = () => <TableWithoutProps />;

export const WithoutHoverableRows = () => <TableExample hoverableRows={false} />;

export const WithHoverableRows = () => <TableExample hoverableRows={true} />;

export const WithoutStripedRows = () => <TableExample hoverableRows={false} stripedRows={false} />;

export const WithoutStripedHoverable = () => <TableExample hoverableRows={true} stripedRows={false} />;

export const WithStripedRows = () => <TableExample hoverableRows={false} stripedRows={true} />;
