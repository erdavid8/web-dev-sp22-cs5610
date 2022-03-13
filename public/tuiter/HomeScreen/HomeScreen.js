import PostList from "../PostList/PostList.js";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";

(function ($) {
    $('#wd-home').append(`
       
    <div class="container">
        <div class="row mt-2">
           <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 mt-1">
                ${NavigationSidebar('home')}
            </div>      
            
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-9 col-9 mt-1">
                ${PostList()}
            </div>  
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
                ${PostSummaryList()}
            </div>
        </div>
    </div>
        
    `);
})($);

/*
        <div class="wd-left-nav-links">

            <ul class="list-group">
                    ${Index()}
            </ul>
        </div>
*/
