import PostList from "../PostList/PostList.js";

(function ($) {
    $('#wd-home').append(`
       
        <div class="wd-left-nav-links">
            
            <ul class="list-group">
                    ${PostList()}
            </ul>
        </div>
        
    `);
})($);
