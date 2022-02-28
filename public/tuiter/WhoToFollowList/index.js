import WhoToFollowListItem from "/tuiter/WhoToFollowList/WhoToFollowListItem.js";
import who from "/tuiter/WhoToFollowList/who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
                <li class="list-group-item fg-color-lightgrey"><strong>Who to follow</strong></li>
                ${who.map(item => {return WhoToFollowListItem(item);}).join('')}
            </ul>
`); }
export default WhoToFollowList;
