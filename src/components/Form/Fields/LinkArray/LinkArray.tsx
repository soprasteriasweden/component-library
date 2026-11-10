import * as React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { TextInput } from "../TextInput/TextInput";
import { HiddenInput } from "../HiddenInput/HiddenInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ILinkFieldArray {
    existingLinks: ILink[] | undefined;
    name: string;
    required: boolean;
    label?: string;
}

interface ILink {
    id: number;
    url: string;
    description: string;
}

export const LinkArray: React.FunctionComponent<ILinkFieldArray> = ({ existingLinks, name, required, label = "Webbadress" }) => {
    const { control } = useFormContext<Record<string, ILink[]>>();
    const { fields, append, remove, replace } = useFieldArray({
        control,
        name,
        keyName: "fieldId",
    });

    React.useEffect(() => {
        if (existingLinks) {
            replace(existingLinks);
        }
    }, [existingLinks, replace]);

    return (
        <div>
            {fields.map((link, index) => (
                <fieldset key={link.fieldId} className="border rounded p-3 mb-3">
                    <legend className="visually-hidden">Länk {index + 1}</legend>

                    <div className="row g-3 align-items-start">
                        <HiddenInput name={`${name}.${index}.id`} value={link.id} />

                        <TextInput
                            name={`${name}.${index}.url`}
                            label={label}
                            defaultValue={link.url}
                            className="col-12 col-md"
                            required={required}
                        />
                        <TextInput
                            name={`${name}.${index}.description`}
                            label="Beskrivning"
                            defaultValue={link.description}
                            className="col-12 col-md"
                            required={false}
                        />

                        <div className="col-12 col-md-auto">
                            {/* Invisible label keeps the button aligned with the inputs when validation messages change field heights */}
                            <label className="d-none d-md-block invisible" aria-hidden="true">
                                &nbsp;
                            </label>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => remove(index)}
                                aria-label={`Ta bort länk ${index + 1}`}
                                title="Ta bort"
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                    </div>
                </fieldset>
            ))}

            <div className="text-end">
                <button type="button" className="btn btn-outline-primary" onClick={() => append({ description: "", url: "", id: 0 })}>
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Lägg till
                </button>
            </div>
        </div>
    );
};