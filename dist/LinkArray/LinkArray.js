import * as React from "react";

import { useFormContext } from 'react-hook-form';

import { TextInput } from "../TextInput/TextInput";

import { HiddenInput } from "../HiddenInput/HiddenInput";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const LinkArray = ({ existingLinks, name, required }) => {

    const { setValue, getValues } = useFormContext();

    const [links, setLinks] = React.useState([]);

    React.useEffect(() => {

        if (existingLinks) {

            setLinks(existingLinks);

        }

    }, [existingLinks]);

    const remove = (index) => {

        const { links } = getValues({ nest: true });

        const newLinks = [...links];

        newLinks.splice(index, 1);

        setLinks(prevLinks => [...prevLinks.filter((e, i) => i !== index)]);

        for (let i = 0; i < newLinks.length; i++) {

            setValue(`${name}[${i}].id`, newLinks[i].id);

            setValue(`${name}[${i}].url`, newLinks[i].url);

            setValue(`${name}[${i}].description`, newLinks[i].description);

        }

    };

    const append = () => {

        setLinks([...links, { description: "", url: "", id: 0 }]);

    };

    return (React.createElement("div", null,

        links.map((link, index) => {

            return (React.createElement("fieldset", { key: index },

                React.createElement("hr", null),

                React.createElement("div", { className: "row" },

                    React.createElement(HiddenInput, { name: `${name}[${index}].id`, value: link.id }),

                    React.createElement(TextInput, { name: `${name}[${index}].url`, label: "Webbadress", defaultValue: link.url, className: "col-6", required: required }),

                    React.createElement(TextInput, { name: `${name}[${index}].description`, label: "Beskrivning", defaultValue: link.description, className: "col-6", required: required })),

                React.createElement("button", { className: "btn btn-danger btn-sm", type: "button", onClick: () => remove(index) },

                    React.createElement(FontAwesomeIcon, { icon: faTrashAlt }))));

        }),

        React.createElement("div", { className: "text-right" },

            React.createElement("input", { type: "button", className: "btn btn-sm btn-primary", onClick: () => append(), value: "L\u00E4gg till" }))));

};

