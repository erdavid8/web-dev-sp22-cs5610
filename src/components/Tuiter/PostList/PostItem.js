import React from "react";
import PostItemTrue from "./PostItemTrue";
import PostItemFalse from "./PostItemFalse";

const PostItem = (
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
            <li className="list-group-item bg-color-black">
                <div className="row">
                    
                    <div className="col-2">
                        <img src={post.avatarIcon} alt="avatar" className="img-fluid img-thumbnail wd-avatar-sizing"/>
                    </div>
                    
                    <div className="col-10">
                        <div>
                            <p className="m-0 fs-6">{post.name} <i className="fa-solid fa-circle-check"></i> <span className="fg-color-darkgray">{post.handle} - {post.time}<span className="fa-solid fa-ellipsis wd-ellipsis-right ms-6"></span></span></p>
                            <p className="m-0 fs-6" dangerouslySetInnerHTML={{__html:post["quote"]}}></p>
                        </div>

                        {!post.skip ? <PostItemTrue post={post}/> : <PostItemFalse post={post}/>}

                        <div className="row mt-3">
                            <div className="row col-3">
                                <p className="col-1 fg-color-darkgray"><a href="#"><i className="fa-regular fa-comment fg-color-darkgray"></i></a></p>
                                <p className="col-1 ms-0 fg-color-darkgray">{post.comments}</p>
                            </div>
                            <div className="row col-3 ms-2">
                                <p className="col-1 fg-color-darkgray"><a href="#"><i className="fa-solid fa-retweet fg-color-darkgray"></i></a></p>
                                <p className="col-1 ms-0 fg-color-darkgray">{post.tweets}</p>
                            </div>
                            <div className="row col-3 ms-3">
                                <p className="col-1 fg-color-darkgray"><a href="#"><i className="fa-solid fa-heart fg-color-darkgray"></i></a></p>
                                <p className="col-1 ms-0 fg-color-darkgray">{post.heart}</p>
                            </div>
                            <div className="row col-3 ms-4">
                                <p className="fg-color-darkgray"><a href="#"><i className="fa-solid fa-inbox fg-color-darkgray"></i></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default PostItem;