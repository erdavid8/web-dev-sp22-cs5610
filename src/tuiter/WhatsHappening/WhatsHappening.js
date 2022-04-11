import React, {useState} from "react";                                   // get useState hook
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";                  // from tuits-actions

const WhatsHappening = () => {
//  let [whatsHappening, setWhatsHappening] = useState('');             // create whatsHappening state variable
    const [newTuit, setNewTuit] = useState({
        postedBy: {username: "Pat G."},
        tuit: 'New tuit',
        avatarIcon: "/images/pat_gelsinger_avatar.jpg",
        likes: 0,
        dislikes: 0,
        liked: false,
        disliked: false
    }); // for homework 8
    const dispatch = useDispatch();                                      // use the hook to get dispatcher

/*
    const tuitClickHandler = () => {                                     // handle the tuit button click. use dispatcher to notify reducer of new tuit.
        dispatch({type: 'create-tuit',                                   // contains the text written tuit in textarea
            tuit: whatsHappening                                         // and save it in whatsHappening state variable
        });
    }
*/
    return(
        <>
            <li className="list-group-item wd-whatshappening-block">
                <div className="row">
                    <div className="col-2">
                        <img src="\images\intel_logo.jpg" alt="avatar" className="img-fluid img-thumbnail wd-image-sizing-whatshappening"/>
                    </div>
                    <div className="col-10">
                        <div className="row ps-0">
                            <p className="ps-0 mb-0 fg-color-darkgray fs-5">What's happening?</p>
                        </div>
                        <div className="row">
                            {/* <textarea className="bg-black wd-noborder fg-color-white" value={whatsHappening} onChange={(event) => setWhatsHappening(event.target.value)}></textarea> */}
                            <textarea className="bg-black wd-noborder fg-color-white" onChange={(event) => setNewTuit({...newTuit, tuit: event.target.value})}></textarea>
                        </div>
                        <div className="row pt-3 wd-whatshappening-textarea"></div>
                        <div className="row mt-3 mb-3">
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-image"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-solid fa-chart-column"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-face-smile"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-calendar"></i></div>
                            <div className="col-5"></div>
                            <div className="col-3 mt-1 pe-0">
                                {/* <button className="btn btn-primary wd-left-button-tweet text-center override-button" onClick={tuitClickHandler}> */}
                                <button className="btn btn-primary wd-left-button-tweet text-center override-button" onClick={() => createTuit(dispatch, newTuit)}>
                                    <span className="wd-small-fontsize">Tweet</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default WhatsHappening;