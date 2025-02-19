var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { useFormContext } from "react-hook-form";
import * as bootstrap from "bootstrap";
export var CustomSubmitButtonType;
(function (CustomSubmitButtonType) {
    CustomSubmitButtonType["default"] = "btn-primary";
    CustomSubmitButtonType["alternative"] = "btn-link";
})(CustomSubmitButtonType || (CustomSubmitButtonType = {}));
export const CustomSubmitButton = (_a) => {
    var { onButtonSubmit, buttonType = CustomSubmitButtonType.default, isLoading, children, disabled, title = "" } = _a, buttonProps = __rest(_a, ["onButtonSubmit", "buttonType", "isLoading", "children", "disabled", "title"]);
    const { handleSubmit } = useFormContext();
    const tooltipRef = React.useRef(null);
    React.useEffect(() => {
        if (tooltipRef.current) {
            const tooltip = new bootstrap.Tooltip(tooltipRef.current, {
                title: isLoading ? "Laddar..." : title,
                placement: "right",
                html: true
            });
            return () => {
                tooltip.dispose(); // ✅ Cleanup tooltip on unmount
            };
        }
    }, [isLoading, title]);
    return (React.createElement("span", { ref: tooltipRef, className: `d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`, "data-bs-toggle": "tooltip" },
        React.createElement("button", Object.assign({}, buttonProps, { type: "submit", className: `btn btn-sm ${buttonType}`, onClick: onButtonSubmit ? handleSubmit(onButtonSubmit) : undefined, disabled: isLoading || disabled }), isLoading ? (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }),
            " ",
            children)) : (children))));
};
