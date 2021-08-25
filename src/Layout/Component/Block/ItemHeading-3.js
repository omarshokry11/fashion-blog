import React, {useState} from "react";
import {Image} from "react-bootstrap";
import Replies from "./Replies";

export default function ItemHeading3() {

    const itemReplies = [
        {id: 1, imgUser: "/img/girl_mountain.jpg", strong: "Jane", h4: "April 10, 2015, 7:22 PM", p: "That was a great runway show! Thanks for everything"},
        {id: 2, imgUser: "/img/boy.jpg", strong: "John", h4: "April 8, 2015, 10:32 PM", p: "Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt."
        },
        {id: 3, imgUser: "/img/girl_hood.jpg", strong: "Anja", h4: "April 7, 2015, 9:12 PM", p: "Cant wait for the runway to start!"}
    ]

    const [like, setLike] = useState();
    const [replies, setReplies] = useState();

    return(
        <>
            <div className="main-title-heading-container">
                <div className="title text-center">
                    <h3>TITLE HEADING</h3>
                    <h5>Title description, <span>May 2, 2016</span></h5>
                </div>
                <div className="img">
                    <Image src="/img/runway.jpg" />
                </div>
                <div className="details">
                    <p><strong>Dont miss!</strong> The runway in New York City this weekend is gonna be legendary!</p>
                    <p>
                        Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim,
                        ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                        ultricies congue gravida diam non fringilla.
                    </p>
                    <div className="buttons">
                        <button className="like" onClick={()=>setLike(!like)}>{like ? <i className="fas fa-check"> </i> : <i className="fas fa-thumbs-up"> </i>} Like</button>
                        <button className="replies" onClick={()=>setReplies(!replies)}>Replies <span>3</span></button>
                    </div>
                    {replies ? <Replies itemReplies={itemReplies} /> : null}
                </div>
            </div>
        </>
    )
}