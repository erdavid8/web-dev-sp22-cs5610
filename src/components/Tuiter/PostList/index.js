import React from "react";
import PostItem from "./PostItem";
import post from "./post.json";

const PostList = () => {
    return (
        <>
            {
                    post.map(post => {
                    return (
                        <PostItem post={post} key={post.UID}/>
                    );
                })
            }
        </>
    )};

export default PostList;