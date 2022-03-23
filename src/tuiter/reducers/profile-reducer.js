import profileJson from "../data/profile.json"

const profileReducer = (state = profileJson, action) => {   // initialize the reducer's state - profileJason, action
    switch (action.type) {
        case 'save-profile':
            /* console.log(action.profile.firstName);
               console.log(action.profile.bio);
               console.log(action.profile.location);
               console.log(action.profile.website);
               console.log(action.profile.dataOfBirth); */

            return [action.profile]

        default:
            return profileJson;                                          // return the single static state
    }
}

export default profileReducer;