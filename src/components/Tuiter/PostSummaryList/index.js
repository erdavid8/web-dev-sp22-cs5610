import React from "react";
import PostSummaryItem from "./PostSummmaryItem";
import post from "./post.json";

const PostSummaryList = () => {
    return(
        <>
            {
                post.map(post => {
                    return(
                        <PostSummaryItem post={post} key={post.UID}/>
                    );
                })
            }
        </>
    )};

export default PostSummaryList;