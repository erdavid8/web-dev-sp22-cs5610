/*import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";*/
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
