

const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img src=${who.avatarIcon} alt="avatar" class="img-fluid img-thumbnail wd-image-sizing">
            </div>
            <div class="col-6">
                <p class="mt-0 mb-0"><strong>${who.userName} </strong><i class="fa-solid fa-circle-check"></i></p><p class="mt-0 mb-0">${who.handle}</p>
            </div>
            <div class="col-4 mt-1">
                <button class="btn btn-primary wd-left-button-tweet text-center override-button">
                    <span>Follow</span>
                </button>
            </div>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;