import React, {useState} from "react";
import {Image} from "react-bootstrap";
import Replies from "./Replies";

export default function ItemHeading1() {

    const itemReplies = [
        {id: 1, imgUser: "/img/avatar_smoke.jpg", strong: "George", h4: "May 3, 2015, 6:32 PM", p: "Great blog post! Following"}
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
                    <Image src="/img/girl_hat.jpg" />
                </div>
                <div className="details">
                    <p>
                        <strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae,
                        convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                        Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                    </p>
                    <p>
                        Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="buttons">
                        <button className="like" onClick={()=>setLike(!like)}>{like ? <i className="fas fa-check"> </i> : <i className="fas fa-thumbs-up"> </i>} Like</button>
                        <button className="replies" onClick={()=>setReplies(!replies)}>Replies <span>1</span></button>
                    </div>
                    {replies ? <Replies itemReplies={itemReplies} /> : null}
                </div>
            </div>
        </>
    )
}