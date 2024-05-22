console.log("working");
Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr",{videos:['./0.mp4','./2.mp4','./3.mp4']});


// const scroll = new LocomotiveScroll({
//                el: document.querySelector('#main'),
//                smooth: true
//            });

gsap.to(".lft-elem",{
               scrollTrigger:{
                              trigger:"#scroll",
                              pin:true,
                              start:"top top",
                              end:"bottom bottom",
                              endTrigger:".last",
                              scrub:1,
               },
               y:"-300%",
               ease:Power1,
          
})

let sections = document.querySelectorAll(".lft-elem");
Shery.imageEffect(".images", {
  style: 4,
//   config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});