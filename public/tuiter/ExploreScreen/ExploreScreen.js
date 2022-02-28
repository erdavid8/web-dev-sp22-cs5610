import NavigationSidebar from "public/tuiter/NavigationSidebar/index.js";
import WhoToFollowList from "public/tuiter/WhoToFollowList/index.js";
import ExploreComponent from "public/tuiter/ExploreScreen/ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
    <div class="container">
        <div class="row mt-2">
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 mt-1">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-9 col-9 mt-1">
                ${ExploreComponent()}
            </div>
            
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
                ${WhoToFollowList()}
            </div>
        </div>
    </div>
    `);
})($);

