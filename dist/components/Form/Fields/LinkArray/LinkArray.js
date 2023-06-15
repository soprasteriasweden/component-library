var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { TextInput } from "../TextInput/TextInput";
import { HiddenInput } from "../HiddenInput/HiddenInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
export var LinkArray = function (_a) {
    var existingLinks = _a.existingLinks, name = _a.name, required = _a.required;
    var _b = useFormContext(), setValue = _b.setValue, getValues = _b.getValues;
    var _c = React.useState([]), links = _c[0], setLinks = _c[1];
    React.useEffect(function () {
        if (existingLinks) {
            setLinks(existingLinks);
        }
    }, [existingLinks]);
    var remove = function (index) {
        var links = getValues({ nest: true }).links;
        var newLinks = __spreadArrays(links);
        newLinks.splice(index, 1);
        setLinks(function (prevLinks) { return __spreadArrays(prevLinks.filter(function (e, i) { return i !== index; })); });
        for (var i = 0; i < newLinks.length; i++) {
            setValue(name + "[" + i + "].id", newLinks[i].id);
            setValue(name + "[" + i + "].url", newLinks[i].url);
            setValue(name + "[" + i + "].description", newLinks[i].description);
        }
    };
    var append = function () {
        setLinks(__spreadArrays(links, [{ description: "", url: "", id: 0 }]));
    };
    return (React.createElement("div", null,
        links.map(function (link, index) {
            return (React.createElement("fieldset", { key: index },
                React.createElement("hr", null),
                React.createElement("div", { className: "row" },
                    React.createElement(HiddenInput, { name: name + "[" + index + "].id", value: link.id }),
                    React.createElement(TextInput, { name: name + "[" + index + "].url", label: "Webbadress", defaultValue: link.url, className: "col-6", required: required }),
                    React.createElement(TextInput, { name: name + "[" + index + "].description", label: "Beskrivning", defaultValue: link.description, className: "col-6", required: required })),
                React.createElement("button", { className: "btn btn-danger btn-sm", type: "button", onClick: function () { return remove(index); } },
                    React.createElement(FontAwesomeIcon, { icon: faTrashAlt }))));
        }),
        React.createElement("div", { className: "text-right" },
            React.createElement("input", { type: "button", className: "btn btn-sm btn-primary", onClick: function () { return append(); }, value: "L\u00E4gg till" }))));
};
