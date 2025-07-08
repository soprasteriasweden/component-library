import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { CustomButton, ButtonType } from '../../../CustomButton/CustomButton';
import "../../../../assets/styles/FileUpload.style.scss";
export const FileUpload = ({ maxSizeBytes = 5 * Math.pow(2, 20), label, allowedFileTypes, name, disabled, multiple = false, inlineLabel, className, required, requiredValidationMessage, labelCol = 4, inputCol = 8, documentType, numOfFiles, maxFiles }) => {
    var _a;
    const { formState: { errors }, register, setValue, unregister } = useFormContext();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedDocumentTypeIds, setSelectedDocumentTypeIds] = useState([]);
    const [numberOfFiles, setNumberOfFiles] = useState(0);
    const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
        accept: allowedFileTypes === null || allowedFileTypes === void 0 ? void 0 : allowedFileTypes.reduce((acc, type) => (Object.assign(Object.assign({}, acc), { [type]: [] })), {}),
        multiple,
        disabled,
        maxSize: maxSizeBytes,
        maxFiles
    });
    useEffect(() => {
        register(name, { required: required !== null && required !== void 0 ? required : false });
        return () => unregister(name);
    }, [name, register, unregister, required]);
    useEffect(() => {
        if (acceptedFiles.length > 0) {
            const updatedFiles = [...selectedFiles, ...acceptedFiles];
            setSelectedFiles(updatedFiles);
            if (documentType) {
                setSelectedDocumentTypeIds((prev) => [...prev, ...Array(acceptedFiles.length).fill(0)]);
            }
            setValue(name, updatedFiles, { shouldValidate: true });
            setNumberOfFiles(updatedFiles.length);
        }
    }, [acceptedFiles]);
    useEffect(() => {
        if (numOfFiles) {
            numOfFiles(numberOfFiles);
        }
    }, [numberOfFiles, numOfFiles]);
    const formatBytes = (bytes) => {
        if (bytes === 0)
            return '0 Bytes';
        if (bytes < 1024 * 1024)
            return (bytes / 1024).toFixed(1) + " KB";
        if (bytes < 1024 * 1024 * 1024)
            return (bytes / 1024 / 1024).toFixed(1) + " MB";
        return (bytes / 1024 / 1024 / 1024).toFixed(1) + " GB";
    };
    const clearFiles = () => {
        setSelectedFiles([]);
        setSelectedDocumentTypeIds([]);
        setValue(name, undefined, { shouldValidate: true });
        if (documentType === null || documentType === void 0 ? void 0 : documentType.documentTypesName) {
            setValue(documentType.documentTypesName, [], { shouldValidate: true });
        }
        setNumberOfFiles(0);
    };
    const renderSelectedFiles = selectedFiles.map((file, index) => {
        var _a, _b;
        if (!documentType) {
            return (React.createElement("div", { key: index, className: "mb-1" },
                React.createElement("span", null, file.name)));
        }
        const fieldName = `${documentType.documentTypesName}[${index}]`;
        const fieldRegister = register(fieldName, { required: true });
        const selectedId = selectedDocumentTypeIds[index];
        const selectedType = documentType.documentTypes.find(type => type.value === (selectedId === null || selectedId === void 0 ? void 0 : selectedId.toString()));
        return (React.createElement("div", { key: index, className: "mb-3" },
            React.createElement("div", { className: "input-group" },
                React.createElement("input", { type: "text", className: "form-control form-control-sm", value: file.name, readOnly: true }),
                React.createElement("select", { className: "form-control form-control-sm", name: fieldRegister.name, ref: fieldRegister.ref, onBlur: fieldRegister.onBlur, value: (selectedId === null || selectedId === void 0 ? void 0 : selectedId.toString()) || "0", onChange: (e) => {
                        const updated = [...selectedDocumentTypeIds];
                        updated[index] = parseInt(e.target.value);
                        setSelectedDocumentTypeIds(updated);
                        fieldRegister.onChange(e);
                    } },
                    React.createElement("option", { value: "0", disabled: true, hidden: true }, "V\u00E4lj typ av bilaga*"),
                    documentType.documentTypes.map((docType, key) => (React.createElement("option", { key: key, value: docType.value }, docType.text)))),
                (selectedType === null || selectedType === void 0 ? void 0 : selectedType.informationText) && (React.createElement(React.Fragment, null,
                    React.createElement("button", { className: "btn btn-warning btn-sm", type: "button", "data-tooltip-id": `tooltip-${index}`, "data-tooltip-content": selectedType.informationText },
                        React.createElement(FontAwesomeIcon, { icon: faExclamation })),
                    React.createElement(ReactTooltip, { id: `tooltip-${index}`, place: "right" })))),
            errors[documentType.documentTypesName] &&
                ((_b = (_a = errors[documentType.documentTypesName]) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.type) === "required" && (React.createElement("div", { className: "text-danger" }, "En dokumenttyp m\u00E5ste anges"))));
    });
    return (React.createElement("div", { className: `${className} form-group ${inlineLabel ? "row" : ""}` },
        React.createElement("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", Object.assign({ className: "file-upload" }, getRootProps()),
                React.createElement("input", Object.assign({}, getInputProps(), { id: name, name: name })),
                React.createElement("p", null,
                    multiple ? "Dra filer hit eller klicka här för att välja filer" : "Dra en fil hit eller klicka här",
                    maxSizeBytes && ` (max ${formatBytes(maxSizeBytes)})`),
                allowedFileTypes && React.createElement("p", null,
                    "Till\u00E5tna filtyper: ",
                    allowedFileTypes.join(", ")),
                ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" && (React.createElement("div", { className: "text-danger mt-1" }, requiredValidationMessage || `${label} måste anges`))),
            selectedFiles.length > 0 && (React.createElement("div", { className: "ms-2" },
                React.createElement("div", { className: "d-flex justify-content-between align-items-center mb-1" },
                    React.createElement("label", { className: "mb-0" }, "Valda dokument"),
                    React.createElement(CustomButton, { buttonType: ButtonType.deleteAlt, buttonText: "Rensa", onClick: clearFiles })),
                selectedFiles.map((file) => (React.createElement("input", { key: file.name, type: "text", className: "form-control form-control-sm mb-1", value: file.name, readOnly: true }))))))));
};
