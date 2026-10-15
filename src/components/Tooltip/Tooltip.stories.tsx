import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Tooltip } from "./Tooltip";

export default {
    title: "Components/Tooltip",
    component: Tooltip,
    argTypes: {
        title: { control: "text" },
        placement: { control: "select", options: ["top", "bottom", "left", "right"] },
        customClass: { control: "text" }
    }
} as Meta;

const Template: StoryFn<typeof Tooltip> = (args) => (
    <div style={{ padding: "60px", textAlign: "center" }}>
        <Tooltip {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    title: "This is a tooltip",
    children: "Hover or focus me"
};

export const Top = Template.bind({});
Top.args = {
    title: "Shown above",
    placement: "top",
    children: "Hover or focus me"
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
    title: "<strong>Bold</strong><br /><em>Italic</em>",
    children: "Hover for HTML"
};

export const EmptyTitle = Template.bind({});
EmptyTitle.args = {
    title: "",
    children: "No tooltip is shown"
};
