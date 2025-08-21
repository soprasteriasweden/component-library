import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { CustomButton, ButtonType } from '../../../CustomButton/CustomButton';
import "../../../../assets/styles/FileUpload.style.scss";
import { IFileUpload } from '../../../../models/IFormInput';

export const FileUpload: React.FC<IFileUpload> = ({
  maxSizeBytes = 5 * Math.pow(2, 20),
  label,
  allowedFileTypes,
  name,
  disabled,
  multiple = false,
  inlineLabel,
  className,
  required,
  requiredValidationMessage,
  labelCol = 4,
  inputCol = 8,
  documentType,
  numOfFiles,
  maxFiles, 
  disableDropzoneOnSelect = false
}) => {
  const {
    formState: { errors },
    register,
    setValue,
    unregister
  } = useFormContext();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedDocumentTypeIds, setSelectedDocumentTypeIds] = useState<number[]>([]);
  const [numberOfFiles, setNumberOfFiles] = useState<number>(0);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections
  } = useDropzone({
    accept: allowedFileTypes?.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    multiple,
    disabled: disabled || (disableDropzoneOnSelect && !multiple && selectedFiles.length > 0),
    maxSize: maxSizeBytes,
    maxFiles
  });

  useEffect(() => {
    register(name, { required: required ?? false });
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

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    if (bytes < 1024 * 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + " MB";
    return (bytes / 1024 / 1024 / 1024).toFixed(1) + " GB";
  };

  const clearFiles = () => {
    setSelectedFiles([]);
    setSelectedDocumentTypeIds([]);
    setValue(name, undefined, { shouldValidate: true });
    if (documentType?.documentTypesName) {
      setValue(documentType.documentTypesName, [], { shouldValidate: true });
    }
    setNumberOfFiles(0);
  };

  const renderSelectedFiles = selectedFiles.map((file, index) => {
    if (!documentType) {
      return (
        <div key={index} className="mb-1">
          <span>{file.name}</span>
        </div>
      );
    }

    const fieldName = `${documentType.documentTypesName}[${index}]`;
    const fieldRegister = register(fieldName, { required: true });
    const selectedId = selectedDocumentTypeIds[index];
    const selectedType = documentType.documentTypes.find(type => type.value === selectedId?.toString());

    return (
      <div key={index} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-sm"
            value={file.name}
            readOnly
          />
          <select
            className="form-control form-control-sm"
            name={fieldRegister.name}
            ref={fieldRegister.ref}
            onBlur={fieldRegister.onBlur}
            value={selectedId?.toString() || "0"}
            onChange={(e) => {
              const updated = [...selectedDocumentTypeIds];
              updated[index] = parseInt(e.target.value);
              setSelectedDocumentTypeIds(updated);
              fieldRegister.onChange(e);
            }}
          >
            <option value="0" disabled hidden>Välj typ av bilaga*</option>
            {documentType.documentTypes.map((docType, key) => (
              <option key={key} value={docType.value}>
                {docType.text}
              </option>
            ))}
          </select>
          {selectedType?.informationText && (
            <>
              <button
                className="btn btn-warning btn-sm"
                type="button"
                data-tooltip-id={`tooltip-${index}`}
                data-tooltip-content={selectedType.informationText}
              >
                <FontAwesomeIcon icon={faExclamation} />
              </button>
              <ReactTooltip id={`tooltip-${index}`} place="right" />
            </>
          )}
        </div>
        {errors[documentType.documentTypesName] &&
          (errors[documentType.documentTypesName] as any)?.[index]?.type === "required" && (
            <div className="text-danger">En dokumenttyp måste anges</div>
        )}
      </div>
    );
  });

  return (
    <div className={`${className} form-group ${inlineLabel ? "row" : ""}`}>
      <label htmlFor={name} className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>
        {label}:{required ? "*" : ""}
      </label>
      <div className={inlineLabel ? `col-${inputCol}` : ""}>
        <div className={`file-upload ${disabled || (!multiple && selectedFiles.length > 0) ? 'disabled' : ''}`}{...getRootProps()}>
          <input
            {...getInputProps()}
            id={name}
            name={name}
          />
          <p>
            {multiple ? "Dra filer hit eller klicka här för att välja filer" : "Dra en fil hit eller klicka här"}
            {maxSizeBytes && ` (max ${formatBytes(maxSizeBytes)})`}
          </p>
          {allowedFileTypes && <p>Tillåtna filtyper: {allowedFileTypes.join(", ")}</p>}
          {errors[name]?.type === "required" && (
            <div className="text-danger mt-1">
              {requiredValidationMessage || `${label} måste anges`}
            </div>
          )}
        </div>

        {selectedFiles.length > 0 && (
          <div className="ms-2">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="mb-0">Valda dokument</label>
              <CustomButton buttonType={ButtonType.deleteAlt} buttonText="Rensa" onClick={clearFiles} />
            </div>

            {selectedFiles.map((file) => (
              <input key={file.name} type="text"
                className="form-control form-control-sm mb-1"
                value={file.name}
                readOnly
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
