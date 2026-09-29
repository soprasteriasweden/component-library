import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { HyperLink } from "./HyperLink";

export default {
    title: "Components/HyperLink",
    component: HyperLink,
};

const withRouter = (component: React.ReactNode) => (
    <MemoryRouter>
        {component}
    </MemoryRouter>
);

export const InternalLink = () =>
    withRouter(
        <HyperLink linkText="Intern länk" to="/test/1" />
    );

export const ExternalLink = () => (
    <HyperLink linkText="Extern länk" href="https://www.example.com" />
);

export const ExternalLinkInNewTab = () => (
    <HyperLink linkText="Extern länk i ny flik" href="https://www.example.com" openInNewTab />
);

export const WithoutIcon = () =>
    withRouter(
        <HyperLink linkText="Länk utan ikon" to="/test/1" showIcon={false}
        />
    );

export const ObjectPath = () =>
    withRouter(
        <HyperLink linkText="Länk med pathname" to={{ pathname: "/test/123" }}
        />
    );

export const WithAriaLabel = () =>
    withRouter(
        <HyperLink linkText="Klicka här" to="/test/123" ariaLabel="Öppna test 123" />
    );

export const InternalLinkInNewTab = () =>
    withRouter(
        <HyperLink linkText="Intern länk i ny flik" to="/test/1" openInNewTab />
    );