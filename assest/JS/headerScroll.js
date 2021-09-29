

// Header scroll
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
        var element = document.getElementById("header-scroll");
        element.classList.add("active");
    }else{
        var element = document.getElementById("header-scroll");
        element.classList.remove("active");
    }
}
