import * as React from "react";
import { Meta } from "@storybook/react";

import { Form } from "../../Form";
import { LinkArray } from "./LinkArray";

export default {
    title: "Form/Fields/LinkArray",
    component: LinkArray,
} as Meta;

export const Default = () => (
    <Form>
        <LinkArray
            name="links"
            required={false}
            existingLinks={[
                { id: 1, url: "https://example.com", description: "Example website" },
                { id: 2, url: "https://example.org", description: "Another website" },
            ]}
        />
    </Form>
);