import React, {useState} from "react";
import {useNavigate } from "react-router-dom";                        // useNavigate: use to go back previous route
import {useDispatch, useSelector} from "react-redux";

const EditProfile = () => {
    const data = useSelector((state) => state.profile);

    let [profile, setProfile] = useState(
        data[0]
    );

    const dispatch = useDispatch();
    const goBack = useNavigate();

    const saveProfile = () => {
        /* console.log(profile); */
        dispatch({type: 'save-profile',
            profile: profile
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

                    <img className="pe-0 wd-tweet-banner-position" src={profile.bannerPicture} alt="banner"/>

                    <div className="row col-12">
                        <div className="col-6">
                            <i className="fa-solid fa-camera fa-1x wd-editprofile-profile-position d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline"></i>
                            <i className="fa-solid fa-xmark fa-l wd-editprofile-xmark-position d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline"></i>
                            <img className="wd-tweet-profile-position wd-tweet-profile-responsive d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline" src={profile.profilePicture} alt="profile"/>
                        </div>
                    </div>

                </div>

                <div className="row ms-4 pe-0 mt-5 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Name</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder editprofile" rows="1" placeholder={profile.firstName} onChange={(event) => setProfile({...profile, firstName: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Bio</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder wd-changecolor-placeholder" rows="3" placeholder={profile.bio} onChange={(event) => setProfile({...profile, bio: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Location</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" rows="1" placeholder={profile.location} onChange={(event) => setProfile({...profile, location: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Website</p>
                    <textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" rows="1" placeholder={profile.website} onChange={(event) => setProfile({...profile, website: event.target.value})}></textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 mb-4 col-11 wd-border-gray">
                    <p className="ps-0 mb-0 pt-0 fg-color-726D6D wd-font-size-15px">Birth date <span className="fg-color-deepskyblue"> Edit</span></p>
                    {/*<input placeholder={profile.dataOfBirth} className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" type="text" onFocus="(this.type='date')" onBlur="(this.type='text')" id="whiteplaceholder" onChange={(event) => setProfile({...profile, dataOfBirth: event.target.value})}/> */ }
                    <input placeholder={profile.dataOfBirth} className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" type="text" id="whiteplaceholder" onChange={(event) => setProfile({...profile, dataOfBirth: event.target.value})}/>
                </div>

            </div>
        </>
    )
}

export default EditProfile;

/*
<textarea id="whiteplaceholder" className="bg-black ps-0 pb-0 mb-1 fg-color-white wd-noborder" rows="1" placeholder={profile.dataOfBirth} onChange={(event) => setProfile({...profile, dataOfBirth: event.target.value})}></textarea>
*/