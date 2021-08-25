import React, {useState} from "react";
import {Image} from "react-bootstrap";
import Replies from "./Replies";

export default function ItemHeading2() {

    const itemReplies = [
        {id: 1, imgUser: "/img/girl_train.jpg", strong: "Amber", h4: "April 26, 2015, 10:52 PM", p: "Love your blog page! Simply the best! Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {id: 2, imgUser: "/img/girl.jpg", strong: "Angie", h4: "April 23, 2015, 9:12 PM", p: "Love hats!!"}
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
                    <Image src="/img/man_hat.jpg" />
                </div>
                <div className="details">
                    <p><strong>More Hats!</strong> The trend this summer is hats for men!</p>
                    <p>
                        Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
                        Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum,
                        porta lectus vitae, ultricies congue gravida diam non fringilla.
                    </p>
                    <div className="buttons">
                        <button className="like" onClick={()=>setLike(!like)}>{like ? <i className="fas fa-check"> </i> : <i className="fas fa-thumbs-up"> </i>} Like</button>
                        <button className="replies" onClick={()=>setReplies(!replies)}>Replies <span>2</span></button>
                    </div>
                    {replies ? <Replies itemReplies={itemReplies} /> : null}
                </div>
            </div>
        </>
    )
}