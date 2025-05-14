import * as React from "react";
import { IZipCodeInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from '../../../../utils/utils';

export const ZipCodeInput: React.FunctionComponent<IZipCodeInput> = ({
  name,
  tooltipDescription,
  label,
  required,
  className,
  inlineLabel,
  disabled,
  placeholder,
  defaultValue,
  requiredValidationMessage,
  pattern,
  patternValidationMessage,
  labelCol = 4,
  inputCol = 8,
  readonly
}) => {

  const readonlyValues = {
    errors: "",
    register: "",
    setValue: ""
  };

  const { errors, register } = useFormContext() ?? readonlyValues;
  const error = getNestedObjectValue(errors, name);

  return (
    <div className={`${className} form-group ${inlineLabel ? "row" : ""}`}>
      <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>
        {label}{label ? ":" : ""}{required && (readonly === false || readonly === undefined) ? "*" : ""}
      </label>

      <div className={inlineLabel ? `col-${inputCol}` : ""}>
        <div className="input-group">
          {readonly ? (
            <p id={name} className="form-control-plaintext">{defaultValue}</p>
          ) : (
            <input
              type="text"
              name={name}
              id={name}
              className="form-control form-control-sm"
              placeholder={placeholder}
              defaultValue={defaultValue}
              ref={typeof register !== "string" ? register({
                required: {
                  value: required || false,
                  message: requiredValidationMessage || `${label} måste anges`
                },
                pattern: {
                  value: pattern ?? /^[0-9]{5}$/,
                  message: patternValidationMessage || `${label} i fel format`
                },
                validate: (value) => {
                  if (/\s/.test(value)) {
                    return `${label} får inte innehålla mellanslag`;
                  }
                  return true;
                }
              }) : undefined}
              disabled={disabled}
            />
          )}

          {tooltipDescription && (
            <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
          )}
        </div>

        {!readonly && error?.message && (
          <span className="text-danger">{error.message}</span>
        )}
      </div>
    </div>
  );
}
