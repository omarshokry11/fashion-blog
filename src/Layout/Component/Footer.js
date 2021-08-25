import React from "react";

import "./Style/Footer.scss";

export default function Footer() {
    return(
        <div className="main-footer">
            <button>
                <i className="fas fa-arrow-up"> </i>
                <a href="/">To the top</a>
            </button>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </div>
    )
}