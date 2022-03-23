import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'home'
    }) => {

    const location = useLocation().pathname.split("/")
    const match = location[location.length - 1]

    return(
        <>
            <div className="wd-left-nav-links">
                <ul className="list-group no-bullets">
                    <li key="blank" className="list-group-item fg-color-white"><i className="fa-brands fa-twitter"></i></li>
                    {/* default link */}
                    <Link to="" className={`list-group-item ${match === 'tuiter' || match === '' ? 'bg-color-deepskyblue' : ''}`}>
                        <li key="Home">
                            <i className="fa-solid fa-house-chimney fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                            <span className="fg-color-lightgrey text-decoration-none"> Home</span></span>
                        </li>
                    </Link>
                    <Link to="/tuiter/explore" className={`list-group-item ${match === 'explore' ? 'bg-color-deepskyblue' : ''}`}>
                        <li key="Explore">
                            <i className="fa-solid fa-hashtag fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                            <span className="fg-color-lightgrey text-decoration-none"> Explore</span></span>
                        </li>
                    </Link>
                    <Link to="/hello" className={`list-group-item ${match === 'notification' ? 'bg-color-deepskyblue' : ''}`}>
                        <li key="Notification">
                            <i className="fa-solid fa-bell fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                            <span className="fg-color-lightgrey text-decoration-none"> Notifications</span></span>
                        </li>
                    </Link>
                    <Link to="/hello" className={`list-group-item ${match === 'message' ? 'bg-color-deepskyblue' : ''}`}>
                        <li key="Messages">
                            <i className="fa-solid fa-envelope fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                            <span className="fg-color-lightgrey text-decoration-none"> Messages</span></span>
                        </li>
                    </Link>
                    <Link to="/hello" className={`list-group-item ${match === 'bookmark' ? 'bg-color-deepskyblue' : ''}`}>
                        <li key="Bookmarks">
                            <i className="fa-solid fa-bookmark fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                            <span className="fg-color-lightgrey text-decoration-none"> Bookmarks</span></span>
                        </li>
                    </Link>
                    <Link to="/hello" className={`list-group-item ${match === 'lists' ? 'bg-color-deepskyblue' : ''}`}>
                        <li key="Lists">
                            <i className="fa-solid fa-list fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                            <span className="fg-color-lightgrey text-decoration-none"> Lists</span></span>
                        </li>
                    </Link>
                    <Link to="/tuiter/profile" className={`list-group-item ${match === 'profile' || match === 'editprofile' ? 'bg-color-deepskyblue' : ''}`}>
                        <li key="Profile">
                            <i className="fa-solid fa-user fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                            <span className="fg-color-lightgrey text-decoration-none"> Profile</span></span>
                        </li>
                    </Link>
                    <Link to="/hello" className={`list-group-item ${match === 'more' ? 'bg-color-deepskyblue' : ''}`}>
                    <li key="More">
                        <i className="fa-solid fa-ellipsis fg-color-lightgrey"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <span className="fg-color-lightgrey text-decoration-none"> More</span></span>
                    </li>
                    </Link>
                </ul>
            </div>

            <div className="d-grid mt-2">
                <a href="index.html" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </>
    );
}

export default NavigationSidebar;