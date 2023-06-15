var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
        var newLinks = __spreadArray([], links, true);
        newLinks.splice(index, 1);
        setLinks(function (prevLinks) { return __spreadArray([], prevLinks.filter(function (e, i) { return i !== index; }), true); });
        for (var i = 0; i < newLinks.length; i++) {
            setValue("".concat(name, "[").concat(i, "].id"), newLinks[i].id);
            setValue("".concat(name, "[").concat(i, "].url"), newLinks[i].url);
            setValue("".concat(name, "[").concat(i, "].description"), newLinks[i].description);
        }
    };
    var append = function () {
        setLinks(__spreadArray(__spreadArray([], links, true), [{ description: "", url: "", id: 0 }], false));
    };
    return (React.createElement("div", null,
        links.map(function (link, index) {
            return (React.createElement("fieldset", { key: index },
                React.createElement("hr", null),
                React.createElement("div", { className: "row" },
                    React.createElement(HiddenInput, { name: "".concat(name, "[").concat(index, "].id"), value: link.id }),
                    React.createElement(TextInput, { name: "".concat(name, "[").concat(index, "].url"), label: "Webbadress", defaultValue: link.url, className: "col-6", required: required }),
                    React.createElement(TextInput, { name: "".concat(name, "[").concat(index, "].description"), label: "Beskrivning", defaultValue: link.description, className: "col-6", required: required })),
                React.createElement("button", { className: "btn btn-danger btn-sm", type: "button", onClick: function () { return remove(index); } },
                    React.createElement(FontAwesomeIcon, { icon: faTrashAlt }))));
        }),
        React.createElement("div", { className: "text-right" },
            React.createElement("input", { type: "button", className: "btn btn-sm btn-primary", onClick: function () { return append(); }, value: "L\u00E4gg till" }))));
};
