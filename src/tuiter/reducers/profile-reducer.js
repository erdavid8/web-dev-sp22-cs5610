import React from "react";              // import data from profile json file
import profileJson from "../data/profile.json"
import {Link} from "react-router-dom";

const profileReducer = (state = profileJson, action) => {   // initialize the reducer's state - profileJason, action
    switch (action.type) {
        case 'save-profile':
            console.log(action.profile.firstName);
            console.log(action.profile.bio);
            console.log(action.profile.location);
            console.log(action.profile.website);
            console.log(action.profile.dataOfBirth);

            const newProfiles = state.map(profile => {
                const newProfile = profileJson._id === action.profile._id ? action.profile : profile;

                return newProfile
            });

            return newProfiles

        default:
            return profileJson;                                          // return the single static state
    }
}

export default profileReducer;


/*
<Link to="/tuiter/profile/editprofile" className="wd-text-decor-none">
                                <p className="fg-color-black fw-bold">Save</p>
                            </Link>



                       state.filter(
                profile => profile._id !== action.profile._id);


            return state.map(profileJson => {
                if (profileJson._id === action.profile._id) {
                    profileJson.firstName = action.profile.firstName;

                    return profileJson;
                }
            })


               if (profileJson._id === action.profile._id) {
                    const newProfile = {
                        firstName: action.firstName,
                        lastName: action.lastName,
                        handle: action.handle,
                        profilePicture: "/images/drae.jpg",
                        bannerPicture: "/images/Northeastern_University.jpg",
                        bio: action.bio,
                        location: "Boston, MA",
                        dataOfBirth: "7/20/1975",
                        website: "linkedin.com/in/edgar-alan-r-david-a71a089",
                        dateJoined: "07/2010",
                        followingCount: 143,
                        followersCount: 720,
                        tweets: 111572
                    }
                    return [
                        ...state, profileJson];
                }


               const newProfile = profileJson._id === action.profile._id ? action.profile : profile;


                              if (profileJson._id === action.profile._id) {

                    const newProfile = {
                        _id: (new Date()).getTime() + '',
                        firstName: action.profile.firstName,
                        handle: action.profile.handle,
                        profilePicture: "/images/drae.jpg",
                        bannerPicture: "/images/Northeastern_University.jpg",
                        bio: action.profile.bio,
                        location: action.profile.location,
                        dataOfBirth: action.profile.dataOfBirth,
                        website: action.profile.website,
                        dateJoined: "07/2010",
                        followingCount: 143,
                        followersCount: 720,
                        tweets: 111572
                    }


                                const newProfiles = state.map(profile => {
                const newProfile = profileJson._id === action.profile._id ? action.profile : profile;

                return newProfile
            });

                        return newProfiles
 */