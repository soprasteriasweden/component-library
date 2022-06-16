import React from 'react'
import { IFileUpload } from '../../../../models/IFormInput';
import "./FileUpload.style.scss";
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { ButtonType, CustomButton } from '../../../CustomButton/CustomButton';

export const FileUpload: React.FunctionComponent<IFileUpload> = ({ maxSizeBytes = (5 * Math.pow(2, 20)), label, allowedFileTypes, name, disabled, multiple = false, inlineLabel, className, required, requiredValidationMessage, labelCol = 4, inputCol = 8, documentType, numOfFiles }) => {

    const { errors, register, setValue, unregister } = useFormContext();
    const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
    const [selectedDocumentTypeIds, setSelectedDocumentTypeIds] = React.useState<number[]>([]);
    const [numberOfFiles, setNumberOfFiles] = React.useState<number>(0);
    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        rejectedFiles
    } = useDropzone({
        accept: allowedFileTypes,
        multiple: multiple,
        disabled: disabled,
        maxSize: maxSizeBytes
    });

    React.useEffect(() => {
        return () => {
            unregister(name);
        }
    }, [])

    React.useEffect(() => {
        register({ name: name }, { required: required });
    }, []);

    React.useEffect(() => {
        if (acceptedFiles && documentType) {
            var newIds = [];
            for (var i = 0; i < acceptedFiles.length; i++) {
                newIds.push(0);
            }
            setSelectedDocumentTypeIds(selectedDocumentTypeIds.concat(newIds))
        }

        const newFiles = multiple ?
            selectedFiles.concat(acceptedFiles)
            : acceptedFiles;
        setSelectedFiles(newFiles);
        if (newFiles.length > 0) {
            setValue(name, newFiles);
        }
        setNumberOfFiles(newFiles.length);
    }, [acceptedFiles])

    React.useEffect(() => {
        if (numOfFiles) {
            numOfFiles(numberOfFiles);
        }
    }, [numberOfFiles])

    React.useEffect(() => {
        var myWindow: any = window;
        myWindow.$(`.file-tooltip`).tooltip();
    }, [selectedDocumentTypeIds])

    const formatBytes = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        else if (bytes < Math.pow(2, 20))
            return (bytes / Math.pow(2, 10)).toFixed(1) + " KB";
        else if (bytes < Math.pow(2, 30))
            return (bytes / Math.pow(2, 20)).toFixed(1) + " MB";
        else
            return (bytes / Math.pow(2, 30)).toFixed(1) + " GB";
    }

    const renderWarning = (index: number): any => {
        const selectedDocumentTypeId = selectedDocumentTypeIds[index];
        const selectedDocumentType = documentType?.documentTypes.filter(type => type.value === selectedDocumentTypeId.toString())[0];
        if (selectedDocumentType?.informationText) {
            return <button className="btn btn-warning btn-sm file-tooltip" id="less" type="button" data-toggle="tooltip" data-placement="right" data-original-title={selectedDocumentType?.informationText}><FontAwesomeIcon icon={faExclamation} /></button>
        }
        else {
            return "";
        }
    }

    const renderSelectedFiles = selectedFiles.map((file, index) => (
        <div key={index} className="mb-3">
            <div className="input-group">
                <input type="text" className="form-control form-control-sm" value={file.name} readOnly />
                <div className="input-group-append">
                    {
                        documentType && documentType.documentTypes.length > 0 ?
                            <select
                                name={`${documentType.documentTypesName}[${index}]`}
                                className="form-control form-control-sm"
                                ref={register({ required: true })}
                                onChange={(e) =>
                                    setSelectedDocumentTypeIds(selectedDocumentTypeIds.map((id, currentIndex) => {
                                        return currentIndex === index ? parseInt(e.target.value) : id;
                                    })
                                    )}
                            >
                                <option value="" disabled selected={selectedDocumentTypeIds[index].toString() === "0"} hidden>Välj typ av bilaga*</option>
                                {
                                    documentType.documentTypes.map((docType, key) =>
                                        <option key={key} value={docType.value} selected={selectedDocumentTypeIds[index].toString() === docType.value}>{docType.text}</option>
                                    )
                                }
                            </select>
                            : null
                    }
                    {
                        documentType ?
                            renderWarning(index)
                            : null
                    }
                </div>
            </div>
            {
                documentType?.documentTypesName ?
                    <span className="text-danger">{errors ? errors[documentType.documentTypesName] && (errors[documentType.documentTypesName] as any)[index]?.type === "required" &&
                        "En dokumenttyp måste anges" : ""}</span>
                    : null
            }
        </div>
    ));

    const renderInvalidFiles = rejectedFiles.map((file, key) => (
        <li key={key} className="text-danger">
            {file.name} -  {formatBytes(file.size)}
        </li>
    ));

    const renderFileErrorMessage = () => {
        if (rejectedFiles.length <= 0) {
            return <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>;
        }
    };

    const renderAllowedFileTypes = () => {
        if (allowedFileTypes && allowedFileTypes?.length > 0) {
            return (
                <p>Tillåtna filtyper är {allowedFileTypes.join(", ")}</p>
            )
        }
    };

    const clearFiles = () => {
        if (documentType) {
            setSelectedDocumentTypeIds([]);
        }
        setSelectedFiles([]);
        setValue(name, undefined);
        setNumberOfFiles(0);
    }

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label htmlFor={name} className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <div className="file-upload" {...getRootProps()}>
                    <input name={name}
                        id={name}
                        title="Filuppladdning"
                        {...getInputProps()}
                    />
                    <p>
                        {multiple
                            ? "Dra filer hit eller klicka här för att välja filer"
                            : "Dra en fil hit eller klicka här för att välja en fil"}
                        {maxSizeBytes ? " (max " + formatBytes(maxSizeBytes) + ")" : ""}
                    </p>
                    {renderAllowedFileTypes()}
                </div>
                {renderFileErrorMessage()}
                <div>
                    {selectedFiles.length > 0 ?
                        <div className="mb-2">
                            <label>Valda dokument</label>
                            <span className="float-right">
                                <CustomButton buttonType={ButtonType.deleteAlt} buttonText="Rensa" onClick={clearFiles} />
                            </span>
                        </div>
                        : ""}
                    {renderSelectedFiles}
                    {rejectedFiles.length > 0 ? <label>Ej giltiga filer (kommer ej att laddas upp)</label> : ""}
                    {renderInvalidFiles}
                </div>
            </div>
        </div>
    )
}