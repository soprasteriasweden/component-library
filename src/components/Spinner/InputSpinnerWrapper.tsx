import * as React from "react";
import "../../assets/styles/Spinner.scss";

interface IInputSpinnerWrapper {
    isLoading: boolean;
}

export const InputSpinnerWrapper: React.FunctionComponent<IInputSpinnerWrapper> = ({ isLoading, children }) => {

    React.useEffect(() => {
        var myWindow: any = window;
        if(isLoading){
            myWindow.$('[data-toggle="tooltip"]').tooltip();
        }
        else{
            myWindow.$('[data-toggle="tooltip"]').tooltip("disable");
        }
    }, [isLoading])

    return (
        <div className={`spinner-wrapper ${isLoading ? "loading" : ""}`} data-toggle="tooltip" data-placement="right" title={isLoading ? "Laddar..." : ""}>
            {
                isLoading ?
                    <div className={`spinner-container d-flex justify-content-center`}>
                        <div className="spinner-border spinner-border-sm align-self-center" role="status">
                            <span className="sr-only">Laddar...</span>
                        </div>
                    </div>
                    : null
            }
            <div className="spinner-content">
                {children}
            </div>
        </div>
    )
}