import React, {useState} from "react";
import {Link, useNavigate } from "react-router-dom";                        // useNavigate: use to go back previous route
import {useDispatch, useSelector} from "react-redux";

const EditProfile = ({profile}) => {
    let [profileUpdate, setProfileUpdate] = useState({
        handle: "drae",
        profilePicture: "/images/drae.jpg",
        bannerPicture: "/images/Northeastern_University.jpg",
        dateJoined: "07/2010",
        followingCount: 143,
        followersCount: 720,
        tweets: 111572
    });


    const dispatch = useDispatch();
    const goBack = useNavigate();

    const saveProfile = () => {
        console.log(profileUpdate);
        dispatch({type: 'save-profile',
            profile: profileUpdate
        });
    }

    return(
        <>
            <div className="row">
                <div className="row col-12 mb-1">
                    {/* go 1-page back */}
                    <div className="col-2 wd-arrow-back mt-2"><i onClick={() => goBack(-1)} className="fa-solid fa-xmark fa-xl"></i></div>
                    <div className="col-8 ps-0">
                        <h5 className="mt-1 fw-bold">Edit Profile</h5>
                    </div>
                    <div className="col-2 ps-0 pe-0">
                        <button className="btn btn-primary wd-right-button-saveprofile pt-1 pb-4" onClick={saveProfile}>
                                <p className="fg-color-black fw-bold">Save</p>
                        </button>
                    </div>
                </div>

                <div className="row pe-0 col-12 pb-5 pt-2">

                    <img className="pe-0 wd-tweet-banner-position" src={profile.bannerPicture}/>

                    <div className="row col-12">
                        <div className="col-6">
                            <i className="fa-solid fa-camera fa-1x wd-editprofile-profile-position d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline"></i>
                            <i className="fa-solid fa-xmark fa-l wd-editprofile-xmark-position d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline"></i>
                            <img className="wd-tweet-profile-position wd-tweet-profile-responsive d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline" src={profile.profilePicture}/>
                        </div>
                    </div>

                </div>

                <div className="row ms-4 pe-0 mt-5 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Name</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder editprofile" rows="1" placeholder={profile.firstName} onChange={(event) => setProfileUpdate({...profileUpdate, firstName: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Bio</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder wd-changecolor-placeholder" rows="3" placeholder={profile.bio} onChange={(event) => setProfileUpdate({...profileUpdate, bio: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Location</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" rows="1" placeholder={profile.location} onChange={(event) => setProfileUpdate({...profileUpdate, location: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Website</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" rows="1" placeholder={profile.website} onChange={(event) => setProfileUpdate({...profileUpdate, website: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 mb-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Birth date</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" rows="1" placeholder={profile.dataOfBirth} onChange={(event) => setProfileUpdate({...profileUpdate, dataOfBirth: event.target.value})}></textarea>
                </div>

            </div>
        </>
    )
}

export default EditProfile;

/*
    <i onClick={() => deleteTuit(tuits)} className="fa-solid fa-xmark wd-ellipsis-right ms-6"></i>

    <textarea className="bg-black wd-noborder fg-color-white" value={whatsHappening} onChange={(event) => setWhatsHappening(event.target.value)}></textarea>

        profile = {
            _id: 5678,
            firstName: "Edgar Alan",
            lastName: "David",
            handle: "drae",
            profilePicture: "/images/drae.jpg",
            bannerPicture: "/images/Northeastern_University.jpg",
            bio: "An Electronics engineer by profession, graduate student of computer science, semiconductor test development experience, swimmer, bonsai tree enthusiast. No pain, No gain!!!",
            location: "Boston, MA",
            dataOfBirth: "7/20/1975",
            dateJoined: "July 2010",
            followingCount: 143,
            followersCount: 720,
            tweets: 111572
        }

<div className="col-2 wd-arrow-back mt-2"><i onClick={() => closeEditProfile(profile)} className="fa-solid fa-xmark fa-xl"></i></div>

                            <Link to="/tuiter/profile/editprofile" className="wd-text-decor-none">
                                <p className="fg-color-black fw-bold">Save</p>
                            </Link>

                                                    <i className="fa-solid fa-camera fa-1x"></i>

                                                    value={profileUpdate}
*/