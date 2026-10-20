import * as React from "react";
import { useFormContext } from 'react-hook-form';
export const HiddenInput = ({ name, value }) => {
    const { register } = useFormContext();
    return (React.createElement("input", Object.assign({ type: "hidden", id: name, value: value }, register(name))));
};
