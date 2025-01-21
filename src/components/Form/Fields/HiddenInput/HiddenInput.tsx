import * as React from "react";
import { useFormContext } from 'react-hook-form';

interface IHiddenInput {
    name: string;
    value: string;
}
export const HiddenInput: React.FunctionComponent<IHiddenInput> = ({ name, value }) => {

    const { register } = useFormContext();

    return (
        <input
            type="hidden"
            id={name}
            value={value}
            {...register(name)}
        />
    )
}