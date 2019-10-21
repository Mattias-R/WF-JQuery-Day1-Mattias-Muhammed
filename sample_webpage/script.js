$(document).ready(function() {

$("a").attr("href","www.codefactory.wien");
$("code").css("color","red");
$("ol li").css("background-color","#2a7b90");
$("form textarea").val("Express your opinion");
$("img").attr("src","https://cdn.pixabay.com/photo/2015/09/15/08/35/beautiful-940542_960_720.jpg");
$("blockquote").css({"background-color":"orange","font-style":"italic"});
$("#logo").css("color","black");
$(".gray").css("color","white");
$(".date").remove();
$(".sidemenu").append(`<li><a href="#SampleTags">New Templates</a></li>
        <li><a href="http://all-free-download.com/free-website-templates/">Order Templates</a></li>
        <li><a href="http://all-free-download.com/free-website-templates/">Contact us</a></li>`);
$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

})