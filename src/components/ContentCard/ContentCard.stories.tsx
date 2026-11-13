import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ContentCard, ContentCardDocument } from "./ContentCard";

const downloadIcon = <FontAwesomeIcon icon={faDownload} aria-hidden={true} />;

const createDocuments = (): ContentCardDocument[] => [
    {
        id: 1,
        fileName: "Annual report 2025.pdf",
        fileSize: 2_411_724,
        onDownload: fn().mockName("onDownload (Annual report)"),
    },
    {
        id: 2,
        fileName: "Meeting notes.docx",
        fileSize: 48_201,
        onDownload: fn().mockName("onDownload (Meeting notes)"),
    },
    {
        id: 3,
        fileName: "Tiny file.txt",
        fileSize: 120,
        onDownload: fn().mockName("onDownload (Tiny file)"),
    },
];

const links = [
    { url: "https://example.com/policy", description: "Read the full policy" },
    { url: "https://example.com/faq", description: "   " }, // blank description falls back to the url
    { url: "https://example.com/contact" },
];

const meta = {
    title: "Components/ContentCard",
    component: ContentCard,
    parameters: {
        layout: "padded",
    },
    decorators: [
        Story => (
            <div style={{ maxWidth: 720 }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        title: { control: "text" },
        date: { control: "text" },
        message: { control: "text" },
        highlighted: { control: "boolean" },
        highlightedStripe: {
            control: "boolean",
            description: "Thicker left edge on highlighted cards.",
            table: { defaultValue: { summary: "true" } },
        },
        headingLevel: {
            control: { type: "radio" },
            options: [1, 2, 3, 4, 5],
            description: "Heading level of the title. Section headings use level + 1.",
            table: { defaultValue: { summary: "2" } },
        },
        documentsLabel: { control: "text" },
        linksLabel: { control: "text" },
        colors: { control: "object" },
        downloadIcon: { control: false },
        documents: { control: false },
        links: { control: false },
        getDownloadTitle: { control: false },
        formatFileSize: { control: false },
        style: { control: false },
    },
    args: {
        title: "Planned maintenance this weekend",
        date: "2026-11-12",
        message:
            "The system will be unavailable on Saturday between 02:00 and 06:00 while we perform scheduled maintenance. " +
            "No action is required from you.",
        highlightedStripe: true,
    },
} satisfies Meta<typeof ContentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Highlighted: Story = {
    args: {
        highlighted: true,
    },
};

export const HighlightedWithAccent: Story = {
    args: {
        highlighted: true,
        colors: { accent: "#add8e6" },
    },
};

export const HighlightedWithoutStripe: Story = {
    args: {
        highlighted: true,
        highlightedStripe: false,
    },
};

export const WithDocuments: Story = {
    args: {
        documentsLabel: "Documents",
        downloadIcon,
        getDownloadTitle: document => `Download ${document.fileName}`,
        documents: createDocuments(),
    },
};

export const WithLinks: Story = {
    args: {
        linksLabel: "Links",
        links,
    },
};

export const WithDocumentsAndLinks: Story = {
    args: {
        highlighted: true,
        documentsLabel: "Documents",
        linksLabel: "Links",
        downloadIcon,
        getDownloadTitle: document => `Download ${document.fileName}`,
        documents: createDocuments(),
        links,
    },
};

export const WithoutFileSizes: Story = {
    name: "Documents without file size",
    args: {
        documentsLabel: "Documents",
        downloadIcon,
        documents: createDocuments().map(({ fileSize, ...document }) => document),
    },
};

export const CustomFileSizeFormat: Story = {
    name: "Custom file size formatter",
    args: {
        documentsLabel: "Documents",
        downloadIcon,
        formatFileSize: bytes => `${bytes.toLocaleString("en-US")} bytes`,
        documents: createDocuments(),
    },
};

export const CustomColors: Story = {
    args: {
        highlighted: false,
        documentsLabel: "Documents",
        linksLabel: "Links",
        downloadIcon,
        documents: createDocuments().slice(0, 2),
        links: links.slice(0, 1),
        colors: {
            accent: "#e2e6ad",
            mutedText: "#025feb",
            border: "#fb06ff",
            downloadText: "#b42318",
        },
    },
};

export const HeadingLevel: Story = {
    name: "Heading level 3",
    args: {
        headingLevel: 3,
        documentsLabel: "Documents",
        linksLabel: "Links",
        downloadIcon,
        documents: createDocuments().slice(0, 1),
        links: links.slice(0, 1),
    },
};

export const LongContent: Story = {
    args: {
        title: "A very long title that should wrap nicely across multiple lines when the available width gets small",
        message:
            "First paragraph of the message.\n\nSecond paragraph after a blank line, preserved thanks to white-space: pre-wrap.\n\n" +
            "https://example.com/a-really-long-url-without-any-spaces-that-should-wrap-instead-of-overflowing-the-card-container-1234567890",
        documentsLabel: "Documents",
        downloadIcon,
        documents: [
            {
                id: 1,
                fileName: "A-really-long-file-name-that-keeps-going-and-going-and-going-for-quite-a-while-2025-final-v3.pdf",
                fileSize: 5_242_880,
                onDownload: fn(),
            },
        ],
    },
};

export const TitleOnly: Story = {
    args: {
        date: undefined,
        message: undefined,
    },
};
