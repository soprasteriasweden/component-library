import * as React from "react";
import "../../assets/styles/ContentCard.style.scss";
export interface ContentCardDocument {
    id: string | number;
    fileName: string;
    /** File size in bytes */
    fileSize?: number;
    onDownload: () => void;
}
export interface ContentCardLink {
    url: string;
    description?: string | null;
}
export interface ContentCardColors {
    /** Border color of a highlighted card. Defaults to `border`, so there is no color difference unless this is set */
    accent?: string;
    /** Secondary text (date, file size) */
    mutedText?: string;
    /** Card border and attachments divider */
    border?: string;
    /** Text color of the download buttons */
    downloadText?: string;
}
export interface ContentCardProps {
    title: React.ReactNode;
    /** Already formatted by the consumer */
    date?: React.ReactNode;
    message?: React.ReactNode;
    /** Applies the highlighted style (accent border) */
    highlighted?: boolean;
    /** Show the thicker left edge on highlighted cards. Set to false for a card identical to a normal one. Default true */
    highlightedStripe?: boolean;
    documents?: ContentCardDocument[];
    links?: ContentCardLink[];
    /** Heading and aria-label of the documents section */
    documentsLabel?: string;
    /** Heading and aria-label of the links section */
    linksLabel?: string;
    /** Icon shown in front of each document download button */
    downloadIcon?: React.ReactNode;
    getDownloadTitle?: (document: ContentCardDocument) => string;
    formatFileSize?: (bytes: number) => string;
    /** Heading level of the title (sub headings get level + 1). Default 2 */
    headingLevel?: 1 | 2 | 3 | 4 | 5;
    /** Used to build the heading id for aria-labelledby. Defaults to a generated id */
    id?: string;
    colors?: ContentCardColors;
    className?: string;
    style?: React.CSSProperties;
}
export declare const defaultFormatFileSize: (bytes: number) => string;
export declare const ContentCard: React.FunctionComponent<ContentCardProps>;
