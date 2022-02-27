
const NavigationSidebar = (active) => {
    return(`
        <!-- navigation bar links -->
        <div class="wd-left-nav-links">
            <ul class="list-group">
                <li class="list-group-item fg-color-white"><i class="fa-brands fa-twitter"></i></li>
                <li class="list-group-item ${active === 'home' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-house-chimney fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../HomeScreen/index.html" class="fg-color-lightgrey text-decoration-none">Home</a></span>
                </li>
                <li class="list-group-item  ${active === 'explore' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-hashtag fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../ExploreScreen/index.html" class="fg-color-lightgrey text-decoration-none">Explore</a></span>
                </li>
                <li class="list-group-item ${active === 'notification' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-bell fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="fg-color-lightgrey text-decoration-none">Notifications</a></span>
                </li>
                <li class="list-group-item ${active === 'message' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-envelope fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="fg-color-lightgrey text-decoration-none">Messages</a></span>
                </li>
                <li class="list-group-item ${active === 'bookmark' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-bookmark fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="bookmarks.html" class="fg-color-lightgrey text-decoration-none">Bookmarks</a></span>
                </li>
                <li class="list-group-item ${active === 'lists' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-list fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="fg-color-lightgrey text-decoration-none">Lists</a></span>
                </li>
                <li class="list-group-item ${active === 'profile' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-user fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="fg-color-lightgrey text-decoration-none">Profile</a></span>
                </li>
                <li class="list-group-item ${active === 'more' ? 'bg-color-deepskyblue' : ''}">
                    <i class="fa-solid fa-ellipsis fg-color-lightgrey"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="fg-color-lightgrey text-decoration-none">More</a></span>
                </li>
            </ul>
        </div>
        
        <!-- Tweet button -->
        <div class="d-grid mt-2">
            <a href="index.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
    `);
}

export default NavigationSidebar;

