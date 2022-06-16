import React from 'react';

import "./FileUpload.style.scss";

import { useDropzone } from 'react-dropzone';

import { useFormContext } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import { ButtonType, CustomButton } from '../../../CustomButton/CustomButton';

export const FileUpload = ({ maxSizeBytes = (5 * Math.pow(2, 20)), label, allowedFileTypes, name, disabled, multiple = false, inlineLabel, className, required, requiredValidationMessage, labelCol = 4, inputCol = 8, documentType, numOfFiles }) => {

    const { errors, register, setValue, unregister } = useFormContext();

    const [selectedFiles, setSelectedFiles] = React.useState([]);

    const [selectedDocumentTypeIds, setSelectedDocumentTypeIds] = React.useState([]);

    const [numberOfFiles, setNumberOfFiles] = React.useState(0);

    const { getRootProps, getInputProps, acceptedFiles, rejectedFiles } = useDropzone({

        accept: allowedFileTypes,

        multiple: multiple,

        disabled: disabled,

        maxSize: maxSizeBytes

    });

    React.useEffect(() => {

        return () => {

            unregister(name);

        };

    }, []);

    React.useEffect(() => {

        register({ name: name }, { required: required });

    }, []);

    React.useEffect(() => {

        if (acceptedFiles && documentType) {

            var newIds = [];

            for (var i = 0; i < acceptedFiles.length; i++) {

                newIds.push(0);

            }

            setSelectedDocumentTypeIds(selectedDocumentTypeIds.concat(newIds));

        }

        const newFiles = multiple ?

            selectedFiles.concat(acceptedFiles)

            : acceptedFiles;

        setSelectedFiles(newFiles);

        if (newFiles.length > 0) {

            setValue(name, newFiles);

        }

        setNumberOfFiles(newFiles.length);

    }, [acceptedFiles]);

    React.useEffect(() => {

        if (numOfFiles) {

            numOfFiles(numberOfFiles);

        }

    }, [numberOfFiles]);

    React.useEffect(() => {

        var myWindow = window;

        myWindow.$(`.file-tooltip`).tooltip();

    }, [selectedDocumentTypeIds]);

    const formatBytes = (bytes) => {

        if (bytes === 0)

            return '0 Bytes';

        else if (bytes < Math.pow(2, 20))

            return (bytes / Math.pow(2, 10)).toFixed(1) + " KB";

        else if (bytes < Math.pow(2, 30))

            return (bytes / Math.pow(2, 20)).toFixed(1) + " MB";

        else

            return (bytes / Math.pow(2, 30)).toFixed(1) + " GB";

    };

    const renderWarning = (index) => {

        const selectedDocumentTypeId = selectedDocumentTypeIds[index];

        const selectedDocumentType = documentType === null || documentType === void 0 ? void 0 : documentType.documentTypes.filter(type => type.value === selectedDocumentTypeId.toString())[0];

        if (selectedDocumentType === null || selectedDocumentType === void 0 ? void 0 : selectedDocumentType.informationText) {

            return React.createElement("button", { className: "btn btn-warning btn-sm file-tooltip", id: "less", type: "button", "data-toggle": "tooltip", "data-placement": "right", "data-original-title": selectedDocumentType === null || selectedDocumentType === void 0 ? void 0 : selectedDocumentType.informationText },

                React.createElement(FontAwesomeIcon, { icon: faExclamation }));

        }

        else {

            return "";

        }

    };

    const renderSelectedFiles = selectedFiles.map((file, index) => {

        var _a;

        return (React.createElement("div", { key: index, className: "mb-3" },

            React.createElement("div", { className: "input-group" },

                React.createElement("input", { type: "text", className: "form-control form-control-sm", value: file.name, readOnly: true }),

                React.createElement("div", { className: "input-group-append" },

                    documentType && documentType.documentTypes.length > 0 ?

                        React.createElement("select", { name: `${documentType.documentTypesName}[${index}]`, className: "form-control form-control-sm", ref: register({ required: true }), onChange: (e) => setSelectedDocumentTypeIds(selectedDocumentTypeIds.map((id, currentIndex) => {

                                return currentIndex === index ? parseInt(e.target.value) : id;

                            })) },

                            React.createElement("option", { value: "", disabled: true, selected: selectedDocumentTypeIds[index].toString() === "0", hidden: true }, "V\u00E4lj typ av bilaga*"),

                            documentType.documentTypes.map((docType, key) => React.createElement("option", { key: key, value: docType.value, selected: selectedDocumentTypeIds[index].toString() === docType.value }, docType.text)))

                        : null,

                    documentType ?

                        renderWarning(index)

                        : null)),

            (documentType === null || documentType === void 0 ? void 0 : documentType.documentTypesName) ?

                React.createElement("span", { className: "text-danger" }, errors ? errors[documentType.documentTypesName] && ((_a = errors[documentType.documentTypesName][index]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&

                    "En dokumenttyp måste anges" : "")

                : null));

    });

    const renderInvalidFiles = rejectedFiles.map((file, key) => (React.createElement("li", { key: key, className: "text-danger" },

        file.name,

        " -  ",

        formatBytes(file.size))));

    const renderFileErrorMessage = () => {

        var _a;

        if (rejectedFiles.length <= 0) {

            return React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&

                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : "");

        }

    };

    const renderAllowedFileTypes = () => {

        if (allowedFileTypes && (allowedFileTypes === null || allowedFileTypes === void 0 ? void 0 : allowedFileTypes.length) > 0) {

            return (React.createElement("p", null,

                "Till\u00E5tna filtyper \u00E4r ",

                allowedFileTypes.join(", ")));

        }

    };

    const clearFiles = () => {

        if (documentType) {

            setSelectedDocumentTypeIds([]);

        }

        setSelectedFiles([]);

        setValue(name, undefined);

        setNumberOfFiles(0);

    };

    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },

        React.createElement("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "" },

            label,

            ":",

            required ? "*" : ""),

        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },

            React.createElement("div", Object.assign({ className: "file-upload" }, getRootProps()),

                React.createElement("input", Object.assign({ name: name, id: name, title: "Filuppladdning" }, getInputProps())),

                React.createElement("p", null,

                    multiple

                        ? "Dra filer hit eller klicka här för att välja filer"

                        : "Dra en fil hit eller klicka här för att välja en fil",

                    maxSizeBytes ? " (max " + formatBytes(maxSizeBytes) + ")" : ""),

                renderAllowedFileTypes()),

            renderFileErrorMessage(),

            React.createElement("div", null,

                selectedFiles.length > 0 ?

                    React.createElement("div", { className: "mb-2" },

                        React.createElement("label", null, "Valda dokument"),

                        React.createElement("span", { className: "float-right" },

                            React.createElement(CustomButton, { buttonType: ButtonType.deleteAlt, buttonText: "Rensa", onClick: clearFiles })))

                    : "",

                renderSelectedFiles,

                rejectedFiles.length > 0 ? React.createElement("label", null, "Ej giltiga filer (kommer ej att laddas upp)") : "",

                renderInvalidFiles))));

};

