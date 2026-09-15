import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { FormLink } from "./FormLink";

export default {
    title: "Form/Fields/FormLink",
    component: FormLink,
};

export const Default = () => (
    <MemoryRouter>
        <FormLink name="defaultLink" label="Länk" linkText="Gå till startsidan" to="/" />
    </MemoryRouter>
);

export const InlineLabel = () => (
    <MemoryRouter>
        <FormLink
            name="inlineLink"
            label="Inline-länk"
            linkText="Visa detaljer"
            to="/detaljer"
            inlineLabel={true}
        />
    </MemoryRouter>
);

export const WithClickHandler = () => (
    <MemoryRouter>
        <FormLink
            name="clickableLink"
            label="Länk med klick"
            linkText="Klicka här"
            to="/klick"
            onClick={(event) => {
                event.preventDefault();
                console.log("FormLink clicked");
            }}
        />
    </MemoryRouter>
);
