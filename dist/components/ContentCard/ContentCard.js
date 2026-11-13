import * as React from "react";
import { HyperLink } from "../Link/HyperLink";
import "../../assets/styles/ContentCard.style.scss";
export const defaultFormatFileSize = (bytes) => {
    if (bytes >= Math.pow(2, 20)) {
        return `${(bytes / Math.pow(2, 20)).toFixed(1)} MB`;
    }
    return `${Math.max(1, Math.round(bytes / 1024))} kB`;
};
const colorsToCssVars = (colors) => {
    if (!colors) {
        return {};
    }
    const vars = {
        "--content-card-accent": colors.accent,
        "--content-card-muted-text": colors.mutedText,
        "--content-card-border": colors.border,
        "--content-card-download-text": colors.downloadText,
    };
    return Object.fromEntries(Object.entries(vars).filter(([, value]) => value !== undefined));
};
export const ContentCard = ({ title, date, message, highlighted = false, highlightedStripe = true, documents = [], links = [], documentsLabel, linksLabel, downloadIcon, getDownloadTitle, formatFileSize = defaultFormatFileSize, headingLevel = 2, id, colors, className, style, }) => {
    const generatedId = React.useId();
    const headingId = `${id !== null && id !== void 0 ? id : generatedId}-heading`;
    const TitleTag = `h${headingLevel}`;
    const SectionTitleTag = `h${Math.min(headingLevel + 1, 6)}`;
    const hasDocuments = documents.length > 0;
    const hasLinks = links.length > 0;
    const classNames = [
        "content-card",
        highlighted ? "content-card--highlighted" : "",
        highlighted && !highlightedStripe ? "content-card--no-stripe" : "",
        className !== null && className !== void 0 ? className : "",
    ].filter(Boolean).join(" ");
    return (React.createElement("article", { className: classNames, style: Object.assign(Object.assign({}, colorsToCssVars(colors)), style), "aria-labelledby": headingId },
        React.createElement(TitleTag, { id: headingId, className: "content-card__title" }, title),
        date && React.createElement("p", { className: "content-card__date" }, date),
        message && React.createElement("p", { className: "content-card__message" }, message),
        (hasDocuments || hasLinks) && (React.createElement("div", { className: "content-card__attachments" },
            hasDocuments && (React.createElement("section", { "aria-label": documentsLabel !== null && documentsLabel !== void 0 ? documentsLabel : undefined },
                documentsLabel && (React.createElement(SectionTitleTag, { className: "content-card__attachments-title" }, documentsLabel)),
                React.createElement("ul", { className: "content-card__list" }, documents.map((document) => (React.createElement("li", { key: document.id },
                    React.createElement("button", { type: "button", className: "content-card__download", onClick: document.onDownload, title: getDownloadTitle === null || getDownloadTitle === void 0 ? void 0 : getDownloadTitle(document) },
                        downloadIcon && React.createElement("span", { className: "content-card__download-icon" }, downloadIcon),
                        document.fileName),
                    document.fileSize !== undefined && (React.createElement("span", { className: "content-card__file-size" },
                        " ",
                        "(",
                        formatFileSize(document.fileSize),
                        ")")))))))),
            hasLinks && (React.createElement("section", { "aria-label": linksLabel !== null && linksLabel !== void 0 ? linksLabel : undefined },
                linksLabel && (React.createElement(SectionTitleTag, { className: "content-card__attachments-title" }, linksLabel)),
                React.createElement("ul", { className: "content-card__list" }, links.map((link, index) => {
                    var _a;
                    return (React.createElement("li", { key: `${link.url}-${index}` },
                        React.createElement(HyperLink, { href: link.url, linkText: ((_a = link.description) === null || _a === void 0 ? void 0 : _a.trim()) || link.url, openInNewTab: true })));
                }))))))));
};
