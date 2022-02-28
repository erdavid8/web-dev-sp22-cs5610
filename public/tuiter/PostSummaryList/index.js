import PostSummaryItem from "public/tuiter/PostSummaryList/PostSummmaryItem.js";
import posts from "public/tuiter/PostSummaryList/posts.js";

const PostSummaryList = () => {
    return (`
                ${posts.map(item => {return PostSummaryItem(item);}).join('')}
    `); }
export default PostSummaryList;