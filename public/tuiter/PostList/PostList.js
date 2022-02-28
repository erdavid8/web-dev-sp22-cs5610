import post from "/tuiter/PostList/post.js";
import PostItem from "/tuiter/PostList/PostItem.js";

const PostList = () => {
    return (`
                ${post.map(item => {return PostItem(item);}).join('')}
    `); }
export default PostList;