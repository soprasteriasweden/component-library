import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { HyperLink } from "./HyperLink";

export default {
    title: "Components/HyperLink",
    component: HyperLink,
};

export const WithIcon = () => (
    <MemoryRouter>
        <HyperLink linkText="Klicka här" to="/test/1" />
    </MemoryRouter>
);

export const WithoutIcon = () => (
    <MemoryRouter>
        <HyperLink linkText="Klicka här" to="/test/1" showIcon={false} />
    </MemoryRouter>
);

export const ObjectPath = () => (
    <MemoryRouter>
        <HyperLink linkText="Klicka här" to={{ pathname: "/test/123" }} />
    </MemoryRouter>
);

export const WithAriaLabel = () => (
    <MemoryRouter>
        <HyperLink
            linkText="Klicka här"
            to={{ pathname: "/test/123" }}
            ariaLabel="Öppna test 123"
        />
    </MemoryRouter>
);
