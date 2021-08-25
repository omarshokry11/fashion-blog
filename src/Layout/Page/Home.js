import React from "react";
import NavBar from "../Component/NavBar";
import Cover from "../Component/Cover";
import TitleHeading from "../Component/TitleHeading";
import Details from "../Component/Details";

import "./Style/Home.scss";

export default function Home() {
    return(
        <div className="main-home-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <NavBar />
                    </div>
                    <div className="col-12">
                        <Cover />
                    </div>
                    <div className="col-lg-8 col-12">
                        <TitleHeading />
                    </div>
                    <div className="col-lg-4 col-12">
                        <Details />
                    </div>
                </div>
            </div>
        </div>
    )
}