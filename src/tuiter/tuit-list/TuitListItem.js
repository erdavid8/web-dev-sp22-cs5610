import React from "react";
import {useDispatch} from "react-redux";                                        // import useDispatch
import TuitStat from "./TuitStat"

const TuitListItem = ({tuits}) => {
    const dispatch = useDispatch();                                             // get dispatcher to send message to reducer
    const deleteTuit = (tuits) => {                                             // handle the delete-tuit event
        dispatch({type: 'delete-tuit', tuits})                            // notify redux with delete-tuit event and delete tuit at the same time
    }
    return(
        <>
            <li className="list-group-item">
                <div className="row">

                    <div className="col-2">
                        <img src={tuits.avatarIcon} alt="avatar" className="img-fluid img-thumbnail wd-avatar-sizing_tuit p-0"/>
                    </div>

                    <div className="col-10">
                        <div>
                            <p className="m-0 fs-6">{tuits.username} <i className="fa-solid fa-circle-check"></i> <span className="fg-color-darkgray">{tuits.handle}<i onClick={() => deleteTuit(tuits)} className="fa-solid fa-xmark wd-ellipsis-right ms-6"></i></span></p>
                            <p className="m-0 fs-6">{tuits.tuit}</p>
                        </div>

                        <div className="row mt-2 m-0 p-0 wd-PostItem-img-bottom">
                            {
                                tuits.attachments && tuits.attachments.video &&
                                <iframe className="wd-border-width-thin-rounded-bottom m-0 p-0" width="560" height="236"
                                        src={tuits.attachments.video} title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            }
                            {
                                tuits.attachments && tuits.attachments.image &&
                                <img src={tuits.attachments.image} alt="attachment" className="wd-border-width-thin-rounded-bottom m-0 p-0"/>
                            }
                        </div>

                        {/* Update tuits here! */}
                        <TuitStat tuits={tuits}/>

                    </div>
                </div>
            </li>

        </>
    )
}

export default TuitListItem;