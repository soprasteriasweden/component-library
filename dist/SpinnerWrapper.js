import * as React from "react";

import "./Spinner.scss";

export var SpinnerSize;

(function (SpinnerSize) {

    SpinnerSize["large"] = "lg";

    SpinnerSize["small"] = "sm";

})(SpinnerSize || (SpinnerSize = {}));

export const SpinnerWrapper = ({ isLoading, spinnerSize = SpinnerSize.large, children }) => {

    return (React.createElement("div", { className: `spinner-wrapper spinner-wrapper-lg ${isLoading ? "loading" : ""}` },

        isLoading ?

            React.createElement("div", { className: `spinner-container d-flex justify-content-center` },

                React.createElement("div", { className: `spinner-border spinner-border-${spinnerSize} align-self-center`, role: "status" },

                    React.createElement("span", { className: "sr-only" }, "Laddar...")))

            : null,

        React.createElement("div", { className: "spinner-content" }, children)));

};

