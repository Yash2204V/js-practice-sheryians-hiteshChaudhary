var rect = document.querySelector("#center");

rect.addEventListener("mousemove", (dets) => {
  var rectVal = rect.getBoundingClientRect().left;
  var rectLocation = dets.clientX - rectVal;
  // console.log(rectLocation);
  // console.log(rectVal);
  // console.log(dets.clientX);
  if (rectLocation < rect.getBoundingClientRect().width / 2) {
    var redColor = gsap.utils.mapRange(0, rect.getBoundingClientRect().width / 2, 255, 0, rectLocation);
    gsap.to(rect,{
        backgroundColor: `rgb(${redColor},0,0)`,
        ease: Power4
    });
  } else {
    var blueColor = gsap.utils.mapRange(rect.getBoundingClientRect().width/2, rect.getBoundingClientRect().width, 0, 255, rectLocation);
    gsap.to(rect,{
        backgroundColor: `rgb(0,0,${blueColor})`,
        ease: Power4
    });
  }
});
rect.addEventListener("mouseleave", () => {
    gsap.to(rect,{
        backgroundColor: "white"
    });
});
// console.log();
