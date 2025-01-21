import { jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
export const HiddenInput = ({ name, value }) => {
    const { register } = useFormContext();
    return (_jsx("input", Object.assign({ type: "hidden", id: name, value: value }, register(name))));
};
