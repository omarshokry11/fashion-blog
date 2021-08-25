import React from "react";

import "./Style/TopBar.scss";

export default function TopBar() {

    const topBar = [
        {id: 1, icon: "fab fa-facebook-square"},
        {id: 2, icon: "fab fa-instagram"},
        {id: 3, icon: "fab fa-snapchat"},
        {id: 4, icon: "fab fa-flickr"},
        {id: 5, icon: "fab fa-twitter"},
        {id: 6, icon: "fab fa-linkedin-in"},
        {id: 7, icon: "fas fa-search", className: "search"}
    ]

    return(
        <div className="main-top-bar-container">
            <ul className="social">
                {topBar.map((i) => <li className={i.className} key={i.id}><i className={i.icon}> </i></li>)}
            </ul>
        </div>
    )
}