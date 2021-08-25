import React from "react";
import ItemHeading1 from "./Block/ItemHeading-1";
import ItemHeading2 from "./Block/ItemHeading-2";
import ItemHeading3 from "./Block/ItemHeading-3";

import "./Style/TitleHeading.scss";

export default function TitleHeading() {
    return(
        <div className="main-title-heading-content">
            <ItemHeading1 />
            <ItemHeading2 />
            <ItemHeading3 />
        </div>
    )
}