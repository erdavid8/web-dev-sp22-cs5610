import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="wd-left-nav-links">
                <ul className="list-group">
                    <li className="list-group-item fg-color-white"><i className="fa-brands fa-twitter"></i></li>
                    <li className={`list-group-item ${active === 'home' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-house-chimney fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../HomeScreen/index.html" className="fg-color-lightgrey text-decoration-none">Home</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'explore' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-hashtag fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../ExploreScreen/index.html" className="fg-color-lightgrey text-decoration-none">Explore</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'notification' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-bell fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="#" className="fg-color-lightgrey text-decoration-none">Notifications</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'message' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-envelope fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="#" className="fg-color-lightgrey text-decoration-none">Messages</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'bookmark' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-bookmark fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="bookmarks.html" className="fg-color-lightgrey text-decoration-none">Bookmarks</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'lists' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-list fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="#" className="fg-color-lightgrey text-decoration-none">Lists</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'profile' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-user fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="#" className="fg-color-lightgrey text-decoration-none">Profile</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'more' ? 'bg-color-deepskyblue' : ''}`}>
                        <i className="fa-solid fa-ellipsis fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="#" className="fg-color-lightgrey text-decoration-none">More</a></span>
                    </li>
                </ul>
            </div>

            <div className="d-grid mt-2">
                <a href="index.html" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </>
    );
}

export default NavigationSidebar;

