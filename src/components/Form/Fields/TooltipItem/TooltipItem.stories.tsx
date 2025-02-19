import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TooltipItem } from "./TooltipItem";

export default {
    title: "Form/Fields/TooltipItem",
    component: TooltipItem,
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        showDisc: { control: "boolean" }
    }
} as Meta;

const Template: StoryFn<typeof TooltipItem> = (args) => <TooltipItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Hover over me",
    description: "This is a tooltip"
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
    title: "Hover for HTML",
    description: "<strong>This is bold</strong><br/><em>This is italic</em>"
};

export const WithDisc = Template.bind({});
WithDisc.args = {
    title: "Hover with Disc",
    description: "This tooltip has a visible disc",
    showDisc: true
};

export const LongDescription = Template.bind({});
LongDescription.args = {
    title: "Long Tooltip",
    description: "This is a long tooltip. It contains multiple lines of text to test if it wraps correctly. "
};
