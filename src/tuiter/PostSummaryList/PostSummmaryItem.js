import React from "react";

const PostSummaryItem = (
    {
        post = {
            avatarIcon:"/images/react-icon-15.png",
            topic: "Web Development",
            logoImage: "/images/react-icon-15.png",
            username: "ReactJS",
            handle: "@ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            attachments: {
                video: "https://www.youtube.com/embed/unKvMC3Y1kI"
            },
            comments: 123,
            retuits: 234,
            likes: 345,
            sequence: "first"
        }
                }) => {
    const userType = post.sequence;

    return(
        <>
            {(() => {
                if(userType === "last") {
                    return (
                        <div className="row border-solid border-thin-1px-ashgray-last bg-color-222">
                            <div className="col-10 mt-3 mb-3">
                                <p className="m-0 fs-6 fg-color-ashgrey">{post.topic}</p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.username} <i className="fa-solid fa-circle-check"></i><span className="fw-lighter fg-color-ashgrey"> - {post.time}</span></p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.title}</p>
                            </div>
                            <div className="col-2">
                                <img src={post.logoImage} alt="React" className="img-fluid img-thumbnail wd-center-image-logo"/>
                            </div>
                        </div>
                    )
                } else if (userType === "last") {
                    return (
                        <div className="row border-solid border-thin-1px-ashgray-last bg-color-222">
                            <div className="col-10 mt-3 mb-3">
                                <p className="m-0 fs-6 fg-color-ashgrey">{post.topic}</p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.username} <i className="fa-solid fa-circle-check"></i><span className="fw-lighter fg-color-ashgrey"> - {post.time}</span></p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.title}</p>
                            </div>
                            <div className="col-2">
                                <img src={post.logoImage} alt="React" className="img-fluid img-thumbnail wd-center-image-logo"/>
                            </div>
                        </div>
                    )
                } else {
                    return(
                        <div className="row border-solid border-thin-1px-ashgray-middle bg-color-222">
                            <div className="col-10 mt-3 mb-3">
                                <p className="m-0 fs-6 fg-color-ashgrey">{post.topic}</p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.username} <i className="fa-solid fa-circle-check"></i><span className="fw-lighter fg-color-ashgrey"> - {post.time}</span></p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.title}</p>
                            </div>
                            <div className="col-2">
                                <img src={post.logoImage} alt="React" className="img-fluid img-thumbnail wd-center-image-logo"/>
                            </div>
                        </div>
                    )
                }
            }) ()}
        </>
    );
}

export default PostSummaryItem;