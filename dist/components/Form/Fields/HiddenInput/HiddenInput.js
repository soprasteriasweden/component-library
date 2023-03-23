import * as React from "react";
import { useFormContext } from 'react-hook-form';
export var HiddenInput = function (_a) {
    var name = _a.name, value = _a.value;
    var register = useFormContext().register;
    return (React.createElement("input", { type: "hidden", name: name, id: name, value: value, ref: register }));
};
