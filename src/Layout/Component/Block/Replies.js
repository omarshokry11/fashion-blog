import React from "react";
import {Image} from "react-bootstrap";

import "./Style/Replies.scss";

export default function Replies(props) {

    return(
        <>
            {props.itemReplies.map((item) => <div className="main-replies-container" key={item.id}>
                <div className="img-user">
                    <Image src={item.imgUser} />
                </div>
                <div className="details">
                    <h4><strong>{item.strong}</strong> {item.h4}</h4>
                    <p>{item.p}</p>
                </div>
            </div>)}
        </>
    )
}