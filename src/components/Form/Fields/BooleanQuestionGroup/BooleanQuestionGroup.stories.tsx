import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import { BooleanQuestionGroup } from "./BooleanQuestionGroup";
import { IBooleanListItem, IBooleanQuestionGroup } from "../../../../models/IFormInput";
import { Form } from "../../Form";
import { CustomSubmitButton } from "../../Form";

interface StorybookBooleanQuestionGroup extends IBooleanQuestionGroup {
    formMetods: any;
}

export default {
    title: "Form/Fields/BooleanQuestionGroup",
    component: BooleanQuestionGroup,
} as Meta;

const Template: StoryFn<StorybookBooleanQuestionGroup> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <BooleanQuestionGroup {...args} />
            <CustomSubmitButton>Submit</CustomSubmitButton>
        </Form>
    );
};

const mockOptions: IBooleanListItem[] = [
    {
        value: "allergies",
        text: "Är du allergisk mot något",
        required: true,
        informationText: "T.ex. nötter, pollen, etc."
    },
    {
        value: "surgery",
        text: "Har du blivit opererad tidigare",
        required: true
    },
    {
        value: "medications",
        text: "Tar du några mediciner dagligen",
        informationText: "Detta fält är inte obligatoriskt.",
        required: false
    }
];

export const Required = Template.bind({});
Required.args = {
    name: "healthQuestions",
    label: "Hälsofrågor",
    labelExplanation: "Svara Ja eller Nej",
    tooltipDescription: "Svara på alla frågor nedan",
    options: mockOptions,
    required: true,
    inlineLabel: true
};

export const NotRequired = Template.bind({});
NotRequired.args = {
    name: "optionalQuestions",
    options: mockOptions,
    required: false,
    inlineLabel: true
};
