import PostSummaryItem from "./PostSummmaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
                ${posts.map(item => {return PostSummaryItem(item);}).join('')}
    `); }
export default PostSummaryList;