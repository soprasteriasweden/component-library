import * as React from "react";

import { useFormContext } from 'react-hook-form';

export const HiddenInput = ({ name, value }) => {

    const { register } = useFormContext();

    return (React.createElement("input", { type: "hidden", name: name, id: name, value: value, ref: register }));

};

