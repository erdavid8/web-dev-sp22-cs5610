import React from "react";
import whos from "../data/who.json"
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    /* const who = useSelector((state) => state.who); */

    return(
        <>
            <ul className="list-group">
                <li className="list-group-item"><strong>Who to follow</strong></li>
                {
                    whos.map(who => {
                        return(
                            <WhoToFollowListItem who={who} key={who.UID}/>
                        );
                    })
                }
            </ul>
        </>
    )};

export default WhoToFollowList;