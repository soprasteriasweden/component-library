import * as React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { TextInput } from "../TextInput/TextInput";
import { HiddenInput } from "../HiddenInput/HiddenInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
export const LinkArray = ({ existingLinks, name, required, label = "Webbadress" }) => {
    const { control } = useFormContext();
    const { fields, append, remove, replace } = useFieldArray({
        control,
        name,
        keyName: "fieldId",
    });
    React.useEffect(() => {
        if (existingLinks) {
            replace(existingLinks);
        }
    }, [existingLinks, replace]);
    return (React.createElement("div", null,
        fields.map((link, index) => (React.createElement("fieldset", { key: link.fieldId, className: "border rounded p-3 mb-3" },
            React.createElement("legend", { className: "visually-hidden" },
                "L\u00E4nk ",
                index + 1),
            React.createElement("div", { className: "row g-3 align-items-start" },
                React.createElement(HiddenInput, { name: `${name}.${index}.id`, value: link.id }),
                React.createElement(TextInput, { name: `${name}.${index}.url`, label: label, defaultValue: link.url, className: "col-12 col-md", required: required }),
                React.createElement(TextInput, { name: `${name}.${index}.description`, label: "Beskrivning", defaultValue: link.description, className: "col-12 col-md", required: false }),
                React.createElement("div", { className: "col-12 col-md-auto" },
                    React.createElement("label", { className: "d-none d-md-block invisible", "aria-hidden": "true" }, "\u00A0"),
                    React.createElement("button", { type: "button", className: "btn btn-sm btn-outline-danger", onClick: () => remove(index), "aria-label": `Ta bort länk ${index + 1}`, title: "Ta bort" },
                        React.createElement(FontAwesomeIcon, { icon: faTrashAlt }))))))),
        React.createElement("div", { className: "text-end" },
            React.createElement("button", { type: "button", className: "btn btn-outline-primary", onClick: () => append({ description: "", url: "", id: 0 }) },
                React.createElement(FontAwesomeIcon, { icon: faPlus, className: "me-2" }),
                "L\u00E4gg till"))));
};
