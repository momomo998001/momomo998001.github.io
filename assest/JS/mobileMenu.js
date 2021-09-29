var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
// console.log(header)
// console.log(mobileMenu)

var headerHeight = header.clientHeight
 
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight
    // var isClosed = header.clientHeight === 68
    if (isClosed) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

// var menuItems = document.querySelectorAll('#nav li a[href*=""]')
// // console.log(menuItems)
// for (var i = 0; i < menuItems.length; i++){
//     var menuItem = menuItems[i]

//     // console.log(menuItem.nextElementSibling)

//     menuItem.onclick = function(event) {
//         var isParentMenu =this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
//         // console.log(this)
//         if (!isParentMenu) {
//             header.style.height = null
//         }else{
//             event.preventDefault();
//         }
//     }
// }
