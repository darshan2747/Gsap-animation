
    var tl=gsap.timeline()
tl.from("nav h1,nav h4,nav button",{
    y:-30,
    duration:1,
    delay:0.7,
    opacity:0,
    stagger:0.15

})

tl.from(".center-part1 h1",{
    x:-200,
    opacity: 0,
    duration:0.5

})
tl.from(".center-part1 p",{
    x:-100,
    opacity: 0,
    duration:0.4

})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,

},"-=0.3")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6

})


gsap.from(".services h3",{
    x:-100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        
        start:"top 60%"
    }

})
