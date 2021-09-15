console.log("i am linked :)");

$("#nav-mobile").hide();
$("#nav-mobile").show();

// $("#nav-mobile").hide(); - wwill hide an element
// $("#nav-mobile").show(); - will show an element
// $("#nav-mobile").toggle(); - will hide and show an element

// example of toggle being used to show and hide a nav on mobile
$("#hamburger").click( function() {
    $("#nav-mobile").toggle();
});



$("#change").click(function(){
    $(".nav-mobile").css("background","black");
    // background:black
});