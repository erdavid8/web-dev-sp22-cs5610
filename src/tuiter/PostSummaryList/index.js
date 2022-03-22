import React from "react";
import PostSummaryItem from "./PostSummmaryItem";
import post from "../data/tuits.json";

const PostSummaryList = () => {
    return(
        <>
            <div className="row border-solid border-thin-1px-ashgray-first bg-color-222">
                <p className="mt-4 mb-4 fg-color-white fa-lg fw-bolder">What's Happening</p>
            </div>
            {
                post.map(post => {
                    return(
                        <PostSummaryItem post={post} key={post._id}/>
                    );
                })
            }
        </>
    )};

export default PostSummaryList;