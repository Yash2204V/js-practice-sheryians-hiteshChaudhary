window.addEventListener("mousemove",function(dets){
    let rect = document.querySelector("#rect");
    var rectWidth = rect.getBoundingClientRect().width;

    let xval = gsap.utils.mapRange(0, window.innerWidth, (rectWidth/2) + 100, window.innerWidth - ((rectWidth/2) + 100), dets.clientX);
    
    gsap.to(rect,{
        left: xval + "px",
        ease: Power3
    })
});
