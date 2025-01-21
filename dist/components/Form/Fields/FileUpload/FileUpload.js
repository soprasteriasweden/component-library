import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import "../../../../assets/styles/FileUpload.style.scss";
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { ButtonType, CustomButton } from '../../../CustomButton/CustomButton';
export const FileUpload = ({ maxSizeBytes = (5 * Math.pow(2, 20)), label, allowedFileTypes, name, disabled, multiple = false, inlineLabel, className, required, requiredValidationMessage, labelCol = 4, inputCol = 8, documentType, numOfFiles, maxFiles }) => {
    const { formState: { errors }, register, setValue, unregister } = useFormContext();
    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [selectedDocumentTypeIds, setSelectedDocumentTypeIds] = React.useState([]);
    const [numberOfFiles, setNumberOfFiles] = React.useState(0);
    const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
        accept: allowedFileTypes === null || allowedFileTypes === void 0 ? void 0 : allowedFileTypes.reduce((acc, type) => (Object.assign(Object.assign({}, acc), { [type]: [] })), {}),
        multiple: multiple,
        disabled: disabled,
        maxSize: maxSizeBytes,
        maxFiles: maxFiles
    });
    React.useEffect(() => {
        return () => {
            unregister(name);
        };
    }, []);
    React.useEffect(() => {
        register(name, { required: required });
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
            return _jsx("button", { className: "btn btn-warning btn-sm file-tooltip", id: "less", type: "button", "data-toggle": "tooltip", "data-placement": "right", "data-original-title": selectedDocumentType === null || selectedDocumentType === void 0 ? void 0 : selectedDocumentType.informationText, children: _jsx(FontAwesomeIcon, { icon: faExclamation }) });
        }
        else {
            return "";
        }
    };
    const renderSelectedFiles = selectedFiles.map((file, index) => {
        var _a;
        return (_jsxs("div", { className: "mb-3", children: [_jsxs("div", { className: "input-group", children: [_jsx("input", { type: "text", className: "form-control form-control-sm", value: file.name, readOnly: true }), _jsxs("div", { className: "input-group-append", children: [documentType && documentType.documentTypes.length > 0 ?
                                    _jsxs("select", Object.assign({ className: "form-control form-control-sm" }, register(`${documentType.documentTypesName}[${index}]`, { required: true }), { onChange: (e) => setSelectedDocumentTypeIds(selectedDocumentTypeIds.map((id, currentIndex) => {
                                            return currentIndex === index ? parseInt(e.target.value) : id;
                                        })), children: [_jsx("option", { value: "", disabled: true, selected: selectedDocumentTypeIds[index].toString() === "0", hidden: true, children: "V\u00E4lj typ av bilaga*" }), documentType.documentTypes.map((docType, key) => _jsx("option", { value: docType.value, selected: selectedDocumentTypeIds[index].toString() === docType.value, children: docType.text }, key))] }))
                                    : null, documentType ?
                                    renderWarning(index)
                                    : null] })] }), (documentType === null || documentType === void 0 ? void 0 : documentType.documentTypesName) ?
                    _jsx("span", { className: "text-danger", children: errors ? errors[documentType.documentTypesName] && ((_a = errors[documentType.documentTypesName][index]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&
                            "En dokumenttyp måste anges" : "" })
                    : null] }, index));
    });
    const renderInvalidFiles = fileRejections.map((fileRejection, key) => (_jsxs("li", { className: "text-danger", children: [fileRejection.file.name, " -  ", formatBytes(fileRejection.file.size)] }, key)));
    const renderFileErrorMessage = () => {
        var _a;
        if (fileRejections.length <= 0) {
            return _jsx("span", { className: "text-danger", children: errors[name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&
                    (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") });
        }
    };
    const renderAllowedFileTypes = () => {
        if (allowedFileTypes && (allowedFileTypes === null || allowedFileTypes === void 0 ? void 0 : allowedFileTypes.length) > 0) {
            return (_jsxs("p", { children: ["Till\u00E5tna filtyper \u00E4r ", allowedFileTypes.join(", ")] }));
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
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [_jsxs("div", Object.assign({ className: "file-upload" }, getRootProps(), { children: [_jsx("input", Object.assign({ name: name, id: name, title: "Filuppladdning" }, getInputProps())), _jsxs("p", { children: [multiple
                                        ? "Dra filer hit eller klicka här för att välja filer"
                                        : "Dra en fil hit eller klicka här för att välja en fil", maxSizeBytes ? " (max " + formatBytes(maxSizeBytes) + ")" : ""] }), renderAllowedFileTypes()] })), renderFileErrorMessage(), _jsxs("div", { children: [selectedFiles.length > 0 ?
                                _jsxs("div", { className: "mb-2", children: [_jsx("label", { children: "Valda dokument" }), _jsx("span", { className: "float-right", children: _jsx(CustomButton, { buttonType: ButtonType.deleteAlt, buttonText: "Rensa", onClick: clearFiles }) })] })
                                : "", renderSelectedFiles, fileRejections.length > 0 ? _jsx("label", { children: "Ej giltiga filer (kommer ej att laddas upp)" }) : "", renderInvalidFiles] })] })] }));
};
