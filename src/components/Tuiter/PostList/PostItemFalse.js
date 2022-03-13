import React from "react";

const PostItemFalse = (
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
        <div className="row mt-2 m-0 p-0 wd-PostItem-img-bottom">
            <img src={post.image} className="wd-border-width-thin-rounded-bottom m-0 p-0"/>
        </div>
    );
}

export default PostItemFalse;