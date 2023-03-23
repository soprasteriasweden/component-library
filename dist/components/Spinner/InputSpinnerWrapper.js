import * as React from "react";
import "./Spinner.scss";
export var InputSpinnerWrapper = function (_a) {
    var isLoading = _a.isLoading, children = _a.children;
    React.useEffect(function () {
        var myWindow = window;
        if (isLoading) {
            myWindow.$('[data-toggle="tooltip"]').tooltip();
        }
        else {
            myWindow.$('[data-toggle="tooltip"]').tooltip("disable");
        }
    }, [isLoading]);
    return (React.createElement("div", { className: "spinner-wrapper ".concat(isLoading ? "loading" : ""), "data-toggle": "tooltip", "data-placement": "right", title: isLoading ? "Laddar..." : "" },
        isLoading ?
            React.createElement("div", { className: "spinner-container d-flex justify-content-center" },
                React.createElement("div", { className: "spinner-border spinner-border-sm align-self-center", role: "status" },
                    React.createElement("span", { className: "sr-only" }, "Laddar...")))
            : null,
        React.createElement("div", { className: "spinner-content" }, children)));
};
