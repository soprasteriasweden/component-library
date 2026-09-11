import * as React from "react";
import { SpinnerSize, SpinnerWrapper } from "./SpinnerWrapper";

export default {
    title: "Components/SpinnerWrapper",
    component: SpinnerWrapper,
};

export const LoadingLarge = () => (
    <SpinnerWrapper isLoading={true} spinnerSize={SpinnerSize.large}>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>Innehåll laddas...</div>
    </SpinnerWrapper>
);

export const LoadingSmall = () => (
    <SpinnerWrapper isLoading={true} spinnerSize={SpinnerSize.small}>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>Innehåll laddas...</div>
    </SpinnerWrapper>
);

export const NotLoading = () => (
    <SpinnerWrapper isLoading={false}>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>Innehåll visas utan spinner.</div>
    </SpinnerWrapper>
);