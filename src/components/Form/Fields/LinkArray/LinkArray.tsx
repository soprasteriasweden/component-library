import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { TextInput } from "../TextInput/TextInput";
import { HiddenInput } from "../HiddenInput/HiddenInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface ILinkFieldArray {
    existingLinks: ILink[] | undefined;
    name: string;
    required: boolean;
}

interface ILink {
    id: number;
    url: string;
    description: string;
}

export const LinkArray: React.FunctionComponent<ILinkFieldArray> = ({ existingLinks, name, required }) => {

    const { setValue, getValues } = useFormContext();

    const [links, setLinks] = React.useState<ILink[]>([]);

    React.useEffect(() => {
        if (existingLinks) {
            setLinks(existingLinks);
        }
    }, [existingLinks])

    const remove = (index: number) => {
        const { links } = getValues({ nest: true });

        const newLinks = [...links];

        newLinks.splice(index, 1);

        setLinks(prevLinks => [...prevLinks.filter((e, i) => i !== index)]);

        for (let i = 0; i < newLinks.length; i++) {
            setValue(`${name}[${i}].id`, newLinks[i].id);
            setValue(`${name}[${i}].url`, newLinks[i].url);
            setValue(`${name}[${i}].description`, newLinks[i].description);
        }
    };

    const append = () => {
        setLinks([...links, { description: "", url: "", id: 0 }]);
    }

    return (
        <div>
            {
                links.map((link: any, index: number) => {
                    return (
                        <fieldset key={index}>
                            <hr />
                            <div className="row">
                                <HiddenInput name={`${name}[${index}].id`} value={link.id} />
                                <TextInput name={`${name}[${index}].url`} label="Webbadress" defaultValue={link.url} className="col-6" required={required} />
                                <TextInput name={`${name}[${index}].description`} label="Beskrivning" defaultValue={link.description} className="col-6" required={required} />
                            </div>
                            <button className="btn btn-danger btn-sm" type="button" onClick={() => remove(index)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </fieldset>
                    )
                })
            }
            <div className="text-right">
                <input type="button" className="btn btn-sm btn-primary" onClick={() => append()} value="Lägg till" />
            </div>
        </div>
    )
}