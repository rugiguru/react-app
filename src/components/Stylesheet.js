import React from "react";
import './myStyle.css'

function Stylesheet(props) {
    let ClassName = props.primary ? 'primary' : '';
    return(
        <div>
            <h1 className={ClassName}>
                Style Sheet
            </h1>
        </div>
    )
}

export default Stylesheet;