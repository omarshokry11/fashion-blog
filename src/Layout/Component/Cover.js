import React from "react";
import {Image} from "react-bootstrap";

import "./Style/Cover.scss";

export default function Cover() {
    return(
        <div className="main-cover-Container">
            <Image src="/img/jane.jpg" />
            <div className="details">
                <h1 className="name">Jane's</h1>
                <h1>FASHION BLOG</h1>
            </div>
        </div>
    )
}