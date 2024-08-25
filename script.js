var tl=gsap.timeline();

tl.from(".a",{
    y:-30,
    opacity:0,
    durationn:0.2,
    stagger:0.1
})
tl.from("#navbar li",{
    y:-30,
    opacity:0,
    durationn:0.2,
    stagger:0.1
})

tl.from("#page4 img",{
    y:-30,
    opacity:0,
    durationn:0.2,
    stagger:0.1
})


function breakTheText(){
    var h2=document.querySelector("#page4 h2");
    var h2Text =h2.textContent

    var splittedText = h2Text.split("")

    var arr="";

    splittedText.forEach(function(ele){
        arr+=`<span>${ele}</span>`
    })
    h2.innerHTML=arr;
}

breakTheText()

// tl.from("#page4 h2",{
//     y:50,
//     opacity:0,
//     durationn:0.8,
//     delay:1,
//     stagger:0.1
// })

tl.from("#page4 h2 span",{
    y:50,
    opacity:0,
    durationn:0.4,
    // delay:0.6,
    stagger:0.1
})


// Navbar Toggle
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// GSAP Animation for product images
// gsap.registerPlugin(ScrollTrigger);

var tl2 = gsap.timeline();

tl2.from("#page1 h4,#page1 h2,#page1 h1,#page1 p,#page1 button",{
    x:-120,
    scale:0,
    opacity:0,
    durationn:0.5,
    stagger:0.5,
    scrollTrigger: {
            trigger: "#page1 h4",
            scroller: "body",
            markers: false,
            start: "top 85%",
            end:"top 80%",
            scrub:2
        }

})


// carts
tl2.from(".pro.left",{
    x:-20,
    scale:0,
    opacity:0,
    durationn:4,
    // stagger:0.5,
    scrollTrigger: {
            trigger: ".pro",
            scroller: "body",
            markers: false,
            start: "top 75%",
            end:"top 70%",
            scrub:2
        }

},"a")

tl2.from(".pro.right",{
    x:20,
    scale:0,
    opacity:0,
    durationn:4,
    // stagger:0.5,
    scrollTrigger: {
            trigger: ".pro",
            scroller: "body",
            markers: false,
            start: "top 75%",
            end:"top 70%",
            scrub:2
        }

},"a")

tl2.from(".pro.center",{
    // x:-800,
    scale:0,
    opacity:0,
    durationn:4,
    // stagger:0.5,
    scrollTrigger: {
            trigger: ".pro",
            scroller: "body",
            markers: false,
            start: "top 75%",
            end:"top 70%",
            scrub:2
        }

})

// h and p
tl2.from("#page2 h2",{
    y:-80,
    scale:0,
    opacity:0,
    durationn:4,
    stagger:0.5,
    scrollTrigger: {
            trigger: "#page2 h2",
            scroller: "body",
            markers: false,
            start: "top 90%",
            end:"top 85%",
            scrub:2
        }

})

tl2.from("#page2 p",{
    y:-80,
    scale:0,
    opacity:0,
    durationn:4,
    stagger:0.5,
    scrollTrigger: {
            trigger: "#page2 h2",
            scroller: "body",
            markers: false,
            start: "top 85%",
            end:"top 80%",
            scrub:2
        }

})

// page3

tl2.from("#page3 p",{
    y:-80,
    scale:0,
    opacity:0,
    durationn:4,
    stagger:0.5,
    scrollTrigger: {
            trigger: "#page3 p",
            scroller: "body",
            markers: false,
            start: "top 85%",
            end:"top 80%",
            scrub:2
        }

})
tl2.from("#page3 h2",{
    y:-80,
    scale:0,
    opacity:0,
    durationn:4,
    stagger:0.5,
    scrollTrigger: {
            trigger: "#page3 h2",
            scroller: "body",
            markers: false,
            start: "top 85%",
            end:"top 80%",
            scrub:2
        }

})
