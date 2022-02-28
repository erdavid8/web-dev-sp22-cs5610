import PostSummaryItem from "/tuiter/PostSummaryList/PostSummmaryItem.js";
import posts from "/tuiter/PostSummaryList/posts.js";

const PostSummaryList = () => {
    return (`
                ${posts.map(item => {return PostSummaryItem(item);}).join('')}
    `); }
export default PostSummaryList;