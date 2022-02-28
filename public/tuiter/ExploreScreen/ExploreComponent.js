import PostSummaryList from "/tuiter/PostSummaryList/";

const ExploreComponent = () => {
    return(`
        
        <!-- search field -->
        <div class="row mb-1">
            <div class="col-11 ms-0 mt-0 wd-search-container no-padding">
                <input class="col-12 wd-center-search bg-color-lightgray" type="search" placeholder="Search Twitter"/>
                <i class="fa-solid fa-magnifying-glass wd-center-magnify-glass"></i>
            </div>

            <div class="col-1 d-lg-inline d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
            <a href="explore-settings.html"><i class="fa-solid fa-gear fa-2x bg-color-black fg-color-deepskyblue"></i></a>
            </div>
        </div>
        
        <!-- navigation tabs -->
        <div class="row mt-2">
            <ul class="nav nav-tabs">
                <li class="nav-item navbar-custom">
                    <a class="nav-link fg-color-white" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fg-color-lightgrey" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fg-color-lightgrey" href="news.html">News</a>
                </li>
                <li class="nav-item d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
                    <a class="nav-link fg-color-lightgrey" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">
                    <a class="nav-link fg-color-lightgrey" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>
        
        <!-- space'x starship image -->
        <div class="row mt-2 wd-text-container">
            <img src="../space-x-startship.jpg" alt="space x starship" class="m-0 p-0">
            <div class="wd-text-bottom-left fg-color-darkgray">SpaceX's Starship</div>
        </div> 
               
        <!-- tweets -->
        <div class="mt-2">
            ${PostSummaryList()}
        </div>
        
        
        <!-- back button -->
        <div class="">
            <a href="/index.html">Back</a>
        </div>
    `);
}
export default ExploreComponent;