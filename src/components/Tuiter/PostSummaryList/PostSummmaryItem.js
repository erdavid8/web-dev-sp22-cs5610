import React from "react";

const PostSummaryItem = (
    {
        post = {
            topic:'Web Development',
            userName: 'ReachJS ',
            time: '2h',
            title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            image: '',
            sequence: 'first',
            UID: '1'
        }
                }) => {
    const userType = post.sequence;

    return(
        <>
            {(() => {
                if(userType === "first") {
                    return (
                        <div className="row border-solid border-thin-1px-ashgray-first bg-color-222">
                            <div className="col-10 mt-3 mb-3">
                                <p className="m-0 fs-6 fg-color-ashgrey">{post.topic}</p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.userName}<i className="fa-solid fa-circle-check"></i><span className="fw-lighter fg-color-ashgrey"> - {post.time}</span></p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.title}</p>
                            </div>
                            <div className="col-2">
                                <img src={post.image} alt="React" className="img-fluid img-thumbnail wd-center-image-logo"/>
                            </div>
                        </div>
                    )
                } else if (userType === "last") {
                    return (
                        <div className="row border-solid border-thin-1px-ashgray-last bg-color-222">
                            <div className="col-10 mt-3 mb-3">
                                <p className="m-0 fs-6 fg-color-ashgrey">{post.topic}</p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.userName}<i className="fa-solid fa-circle-check"></i><span className="fw-lighter fg-color-ashgrey"> - {post.time}</span></p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.title}</p>
                            </div>
                            <div className="col-2">
                                <img src={post.image} alt="React" className="img-fluid img-thumbnail wd-center-image-logo"/>
                            </div>
                        </div>
                    )
                } else {
                    return(
                        <div className="row border-solid border-thin-1px-ashgray-middle bg-color-222">
                            <div className="col-10 mt-3 mb-3">
                                <p className="m-0 fs-6 fg-color-ashgrey">{post.topic}</p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.userName}<i className="fa-solid fa-circle-check"></i><span className="fw-lighter fg-color-ashgrey"> - {post.time}</span></p>
                                <p className="m-0 fs-6 fw-bold fg-color-white">{post.title}</p>
                            </div>
                            <div className="col-2">
                                <img src={post.image} alt="React" className="img-fluid img-thumbnail wd-center-image-logo"/>
                            </div>
                        </div>
                    )
                }
            }) ()}
        </>
    );
}

export default PostSummaryItem;