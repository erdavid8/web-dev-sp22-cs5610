import post from "public/tuiter/PostList/post.js";
import PostItem from "public/tuiter/PostList/PostItem.js";

const PostList = () => {
    return (`
                ${post.map(item => {return PostItem(item);}).join('')}
    `); }
export default PostList;