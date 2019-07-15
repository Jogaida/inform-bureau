var navList = $(".nav-list");
var openNavList = $(".open-nav-list");
var navItem = $(".nav-item");

   (openNavList).on("click",function () {
       (navList).slideToggle(1000);
       
   });

    $(".nav-item-arrow").click(function () {
        $(navList).slideUp(1000);
    });

var hideSidebar = $(".hide-sidebar");
var sideBar = $("main aside");
    (hideSidebar).on('click', function() {
       (sideBar).toggleClass("right"); 
    });
/*$(function(){
   var img = document.querySelector(".logo img");
    $(img).on("click", function(){
       $(img).animate({"borderRadius":"5px"}, 500);  
       $(img).animate({"width":"300", "height":"150"}, 1500);  
    });
 
});*/

console.log($(".mh-form").height(30));
console.log($(".mh-form").width(1313));