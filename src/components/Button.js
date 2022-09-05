import React from "react";

function Button({buttonTitle, logClick, isDisabled}) {

    return (
        <button onClick={logClick} disabled={isDisabled} type={"button"}>{buttonTitle}
        </button>

    );
}

export default Button;