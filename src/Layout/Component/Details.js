import React from "react";
import {Image} from "react-bootstrap";

import "./Style/Details.scss";

export default function Details() {

    const posts = [
        {id: 1, img: "/img/avatar_smoke.jpg", span1: "Denim", span2: "Sed mattis nunc"},
        {id: 2, img: "/img/bandmember.jpg", span1: "Sweaters", span2: "Praes tinci sed"},
        {id: 3, img: "/img/workshop.jpg", span1: "Workshop", span2: "Ultricies congue"},
        {id: 4, img: "/img/avatar_smoke.jpg", span1: "Trends", span2: "Lorem ipsum dipsum"}
    ]

    const tags = [
        {id: 1, className: "active", span: "Fashion"},
        {id: 2, span: "New York"},
        {id: 3, span: "London"},
        {id: 4, span: "Hats"},
        {id: 5, span: "Norway"},
        {id: 6, span: "Sweaters"},
        {id: 7, span: "Ideas"},
        {id: 8, span: "Deals"},
        {id: 9, span: "Accessories"},
        {id: 10, span: "News"},
        {id: 11, span: "Clothing"},
        {id: 12, span: "Shopping"},
        {id: 13, span: "Jeans"},
        {id: 14, span: "Trends"}
    ]

    const inspiration = [
        {id: 1, image: "/img/jeans.jpg"},
        {id: 2, image: "/img/avatar_hat.jpg"},
        {id: 3, image: "/img/team1.jpg"},
        {id: 4, image: "/img/team4.jpg"}
    ]

    const social = [
        {id: 1, icon: "fab fa-facebook-square"},
        {id: 2, icon: "fab fa-instagram"},
        {id: 3, icon: "fab fa-snapchat"},
        {id: 4, icon: "fab fa-flickr"},
        {id: 5, icon: "fab fa-twitter"},
        {id: 6, icon: "fab fa-linkedin-in"},
    ]

    return(
        <div className="main-details-container">
            <div className="cover-details">
                <Image src="/img/avatar_girl2.jpg" />
                <div className="cover-title">
                    <h5>My Name</h5>
                    <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                </div>
            </div>
            <div className="details-posts">
                <div className="post-title">
                    <h4>Popular Posts</h4>
                    {posts.map((post) => <div className="post-item" key={post.id}>
                        <div className="img">
                            <Image src={post.img} />
                        </div>
                        <div className="details">
                            <span className="span-1">{post.span1}</span>
                            <span>{post.span2}</span>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="details-advertise">
                <h4>Advertise</h4>
                <div className="item-advertise">
                    <span> </span>
                    <p>Your AD Here</p>
                </div>
            </div>
            <div className="details-tags">
                <h4>Tags</h4>
                <div className="tags-item">
                    {tags.map((tag) => <span className={tag.className} key={tag.id}>{tag.span}</span>)}
                </div>
            </div>
            <div className="details-inspiration">
                <h4>Inspiration</h4>
                <div className="item-inspiration">
                    {inspiration.map((img) => <Image src={img.image} key={img.id} />)}
                </div>
            </div>
            <div className="details-social">
                <h4>Follow Me</h4>
                <ul className="social">
                    {social.map((li) => <li className={li.className} key={li.id}><i className={li.icon}> </i></li>)}
                </ul>
            </div>
            <div className="details-subscribe">
                <h4>Subscribe</h4>
                <div className="item-subscribe">
                    <p>Enter your e-mail below and get notified on the latest blog posts</p>
                    <input type="text" placeholder="Enter e-mail" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}