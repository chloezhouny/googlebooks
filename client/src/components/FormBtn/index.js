import React from 'react';

function FormBtn(props) {
    return(
        <button {...props} className = "btn btn-success">
            {props.children}
        </button>
    )
}

export default FormBtn;