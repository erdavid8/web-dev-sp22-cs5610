import WhoToFollowListItem from "public/tuiter/WhoToFollowList/WhoToFollowListItem.js";
import who from "public/tuiter/WhoToFollowList/who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
                <li class="list-group-item fg-color-lightgrey"><strong>Who to follow</strong></li>
                ${who.map(item => {return WhoToFollowListItem(item);}).join('')}
            </ul>
`); }
export default WhoToFollowList;
