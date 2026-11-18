import * as React from "react";
import { HyperLink } from "../Link/HyperLink";
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

export const defaultFormatFileSize = (bytes: number): string => {
    if (bytes >= Math.pow(2, 20)) {
        return `${(bytes / Math.pow(2, 20)).toFixed(1)} MB`;
    }

    return `${Math.max(1, Math.round(bytes / 1024))} kB`;
};

const colorsToCssVars = (colors?: ContentCardColors): React.CSSProperties => {
    if (!colors) {
        return {};
    }

    const vars: Record<string, string | undefined> = {
        "--content-card-accent": colors.accent,
        "--content-card-muted-text": colors.mutedText,
        "--content-card-border": colors.border,
        "--content-card-download-text": colors.downloadText,
    };

    return Object.fromEntries(
        Object.entries(vars).filter(([, value]) => value !== undefined)
    ) as React.CSSProperties;
};

export const ContentCard: React.FunctionComponent<ContentCardProps> = ({
    title,
    date,
    message,
    highlighted = false,
    highlightedStripe = true,
    documents = [],
    links = [],
    documentsLabel,
    linksLabel,
    downloadIcon,
    getDownloadTitle,
    formatFileSize = defaultFormatFileSize,
    headingLevel = 2,
    id,
    colors,
    className,
    style,
}) => {
    const generatedId = React.useId();
    const headingId = `${id ?? generatedId}-heading`;

    const TitleTag = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;
    const SectionTitleTag = `h${Math.min(headingLevel + 1, 6)}` as keyof React.JSX.IntrinsicElements;

    const hasDocuments = documents.length > 0;
    const hasLinks = links.length > 0;

    const classNames = [
        "content-card",
        highlighted ? "content-card--highlighted" : "",
        highlighted && !highlightedStripe ? "content-card--no-stripe" : "",
        className ?? "",
    ].filter(Boolean).join(" ");

    return (
        <article
            className={classNames}
            style={{ ...colorsToCssVars(colors), ...style }}
            aria-labelledby={headingId}
        >
            <TitleTag id={headingId} className="content-card__title">
                {title}
            </TitleTag>
            {date && <p className="content-card__date">{date}</p>}
            {message && <p className="content-card__message">{message}</p>}

            {(hasDocuments || hasLinks) && (
                <div className="content-card__attachments">
                    {hasDocuments && (
                        <section aria-label={documentsLabel ?? undefined}>
                            {documentsLabel && (
                                <SectionTitleTag className="content-card__attachments-title">
                                    {documentsLabel}
                                </SectionTitleTag>
                            )}
                            <ul className="content-card__list">
                                {documents.map((document) => (
                                    <li key={document.id}>
                                        <button
                                            type="button"
                                            className="content-card__download"
                                            onClick={document.onDownload}
                                            title={getDownloadTitle?.(document)}
                                        >
                                            {downloadIcon && <span className="content-card__download-icon">{downloadIcon}</span>}
                                            {document.fileName}
                                        </button>
                                        {document.fileSize !== undefined && (
                                            <span className="content-card__file-size">
                                                {" "}({formatFileSize(document.fileSize)})
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    {hasLinks && (
                        <section aria-label={linksLabel ?? undefined}>
                            {linksLabel && (
                                <SectionTitleTag className="content-card__attachments-title">
                                    {linksLabel}
                                </SectionTitleTag>
                            )}
                            <ul className="content-card__list">
                                {links.map((link, index) => (
                                    <li key={`${link.url}-${index}`}>
                                        <HyperLink
                                            href={link.url}
                                            linkText={link.description?.trim() || link.url}
                                            openInNewTab
                                        />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            )}
        </article>
    );
};
