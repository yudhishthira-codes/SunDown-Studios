const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let pagerhover = document.querySelector("#pager-container")
let fixed = document.querySelector("#fixed-images")
pagerhover.addEventListener("mouseenter", function (){
    fixed.style.display = "block"
})
pagerhover.addEventListener("mouseleave", function (){
    fixed.style.display = "none"
})


// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function () {
//             var image = elem1.getAttribute("data-image")
//             fixed.style.backgroundImage = `url(${image})`
// })

var pager =document.querySelectorAll(".pagers")
pager.forEach(function(p){
    p.addEventListener("mouseenter",function(){
       var image =  p.getAttribute("data-image")
        fixed.style.backgroundImage= `url(${image})`
    })
});
