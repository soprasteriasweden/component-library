var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import "../../../../assets/styles/FileUpload.style.scss";
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { ButtonType, CustomButton } from '../../../CustomButton/CustomButton';
export var FileUpload = function (_a) {
    var _b = _a.maxSizeBytes, maxSizeBytes = _b === void 0 ? (5 * Math.pow(2, 20)) : _b, label = _a.label, allowedFileTypes = _a.allowedFileTypes, name = _a.name, disabled = _a.disabled, _c = _a.multiple, multiple = _c === void 0 ? false : _c, inlineLabel = _a.inlineLabel, className = _a.className, required = _a.required, requiredValidationMessage = _a.requiredValidationMessage, _d = _a.labelCol, labelCol = _d === void 0 ? 4 : _d, _e = _a.inputCol, inputCol = _e === void 0 ? 8 : _e, documentType = _a.documentType, numOfFiles = _a.numOfFiles;
    var _f = useFormContext(), errors = _f.errors, register = _f.register, setValue = _f.setValue, unregister = _f.unregister;
    var _g = React.useState([]), selectedFiles = _g[0], setSelectedFiles = _g[1];
    var _h = React.useState([]), selectedDocumentTypeIds = _h[0], setSelectedDocumentTypeIds = _h[1];
    var _j = React.useState(0), numberOfFiles = _j[0], setNumberOfFiles = _j[1];
    var _k = useDropzone({
        accept: allowedFileTypes,
        multiple: multiple,
        disabled: disabled,
        maxSize: maxSizeBytes
    }), getRootProps = _k.getRootProps, getInputProps = _k.getInputProps, acceptedFiles = _k.acceptedFiles, rejectedFiles = _k.rejectedFiles;
    React.useEffect(function () {
        return function () {
            unregister(name);
        };
    }, []);
    React.useEffect(function () {
        register({ name: name }, { required: required });
    }, []);
    React.useEffect(function () {
        if (acceptedFiles && documentType) {
            var newIds = [];
            for (var i = 0; i < acceptedFiles.length; i++) {
                newIds.push(0);
            }
            setSelectedDocumentTypeIds(selectedDocumentTypeIds.concat(newIds));
        }
        var newFiles = multiple ?
            selectedFiles.concat(acceptedFiles)
            : acceptedFiles;
        setSelectedFiles(newFiles);
        if (newFiles.length > 0) {
            setValue(name, newFiles);
        }
        setNumberOfFiles(newFiles.length);
    }, [acceptedFiles]);
    React.useEffect(function () {
        if (numOfFiles) {
            numOfFiles(numberOfFiles);
        }
    }, [numberOfFiles]);
    React.useEffect(function () {
        var myWindow = window;
        myWindow.$(".file-tooltip").tooltip();
    }, [selectedDocumentTypeIds]);
    var formatBytes = function (bytes) {
        if (bytes === 0)
            return '0 Bytes';
        else if (bytes < Math.pow(2, 20))
            return (bytes / Math.pow(2, 10)).toFixed(1) + " KB";
        else if (bytes < Math.pow(2, 30))
            return (bytes / Math.pow(2, 20)).toFixed(1) + " MB";
        else
            return (bytes / Math.pow(2, 30)).toFixed(1) + " GB";
    };
    var renderWarning = function (index) {
        var selectedDocumentTypeId = selectedDocumentTypeIds[index];
        var selectedDocumentType = documentType === null || documentType === void 0 ? void 0 : documentType.documentTypes.filter(function (type) { return type.value === selectedDocumentTypeId.toString(); })[0];
        if (selectedDocumentType === null || selectedDocumentType === void 0 ? void 0 : selectedDocumentType.informationText) {
            return React.createElement("button", { className: "btn btn-warning btn-sm file-tooltip", id: "less", type: "button", "data-toggle": "tooltip", "data-placement": "right", "data-original-title": selectedDocumentType === null || selectedDocumentType === void 0 ? void 0 : selectedDocumentType.informationText },
                React.createElement(FontAwesomeIcon, { icon: faExclamation }));
        }
        else {
            return "";
        }
    };
    var renderSelectedFiles = selectedFiles.map(function (file, index) {
        var _a;
        return (React.createElement("div", { key: index, className: "mb-3" },
            React.createElement("div", { className: "input-group" },
                React.createElement("input", { type: "text", className: "form-control form-control-sm", value: file.name, readOnly: true }),
                React.createElement("div", { className: "input-group-append" },
                    documentType && documentType.documentTypes.length > 0 ?
                        React.createElement("select", { name: "".concat(documentType.documentTypesName, "[").concat(index, "]"), className: "form-control form-control-sm", ref: register({ required: true }), onChange: function (e) {
                                return setSelectedDocumentTypeIds(selectedDocumentTypeIds.map(function (id, currentIndex) {
                                    return currentIndex === index ? parseInt(e.target.value) : id;
                                }));
                            } },
                            React.createElement("option", { value: "", disabled: true, selected: selectedDocumentTypeIds[index].toString() === "0", hidden: true }, "V\u00E4lj typ av bilaga*"),
                            documentType.documentTypes.map(function (docType, key) {
                                return React.createElement("option", { key: key, value: docType.value, selected: selectedDocumentTypeIds[index].toString() === docType.value }, docType.text);
                            }))
                        : null,
                    documentType ?
                        renderWarning(index)
                        : null)),
            (documentType === null || documentType === void 0 ? void 0 : documentType.documentTypesName) ?
                React.createElement("span", { className: "text-danger" }, errors ? errors[documentType.documentTypesName] && ((_a = errors[documentType.documentTypesName][index]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&
                    "En dokumenttyp måste anges" : "")
                : null));
    });
    var renderInvalidFiles = rejectedFiles.map(function (file, key) { return (React.createElement("li", { key: key, className: "text-danger" },
        file.name,
        " -  ",
        formatBytes(file.size))); });
    var renderFileErrorMessage = function () {
        var _a;
        if (rejectedFiles.length <= 0) {
            return React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : "");
        }
    };
    var renderAllowedFileTypes = function () {
        if (allowedFileTypes && (allowedFileTypes === null || allowedFileTypes === void 0 ? void 0 : allowedFileTypes.length) > 0) {
            return (React.createElement("p", null,
                "Till\u00E5tna filtyper \u00E4r ",
                allowedFileTypes.join(", ")));
        }
    };
    var clearFiles = function () {
        if (documentType) {
            setSelectedDocumentTypeIds([]);
        }
        setSelectedFiles([]);
        setValue(name, undefined);
        setNumberOfFiles(0);
    };
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement("div", __assign({ className: "file-upload" }, getRootProps()),
                React.createElement("input", __assign({ name: name, id: name, title: "Filuppladdning" }, getInputProps())),
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
