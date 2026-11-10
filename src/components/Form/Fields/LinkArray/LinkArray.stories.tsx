import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

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

export const WithGroupLabel: StoryObj<typeof LinkArray> = {
    args: {
        name: "links",
        required: false,
        label: "Url",
        groupLabel: "Länkar",
        existingLinks: [
            { id: 1, url: "https://example.com", description: "Example website" },
        ],
    },
    render: (args) => (
        <Form>
            <LinkArray {...args} />
        </Form>
    ),
};