import * as React from "react";
import { InputSpinnerWrapper } from "./InputSpinnerWrapper";

export default {
    title: "Components/InputSpinnerWrapper",
    component: InputSpinnerWrapper,
};

export const Loading = () => (
    <InputSpinnerWrapper isLoading={true}>
        <input type="text" className="form-control" placeholder="Laddar..." />
    </InputSpinnerWrapper>
);

export const NotLoading = () => (
    <InputSpinnerWrapper isLoading={false}>
        <input type="text" className="form-control" placeholder="Skriv här" />
    </InputSpinnerWrapper>
);
