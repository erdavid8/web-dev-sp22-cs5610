import React from "react";

const PostItemTrue = (
    {
        post = {
            avatarIcon:"../elon_musk.png",
            name:"Elon Musk",
            handle:"@elonmusk",
            time:"23h",
            quote:"Amazing show about @inspiration4x mission!",
            image:"../inspiration4_mission_space.png",
            title:"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            story:"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
            website:"netflix.com",
            comments:"4.2K",
            tweets:"3.5K",
            heart:"37.5K",
            skip:false
        }
    }) => {
    return(
        <>
            <div className="row mt-2 m-0 p-0 wd-PostItem-img-top">
                <img src={post.image} alt="image not found" className="wd-border-width-thin-top m-0"/>
            </div>
            <div className="m-0 p-0 wd-PostItem-text">
                <p className="ms-3 mt-0 mb-0 pt-2 fs-6">{post.title}</p>
                <p className="ms-3 mt-0 mb-0 p-0 fs-6 fg-color-darkgray">{post.story}</p>
                <p className="ms-3 mt-0 mb-2 p-0 fs-6 fg-color-darkgray"><i className="fa-solid fa-link"></i> {post.website}</p>
            </div>
        </>
    );
}

export default PostItemTrue;