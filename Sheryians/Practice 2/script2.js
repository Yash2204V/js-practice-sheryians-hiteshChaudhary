window.addEventListener("mousemove",function(dets){
    let rect = document.querySelector("#rect");
    var rectWidth = rect.getBoundingClientRect().width;
    var rectHeight = rect.getBoundingClientRect().height;

    let xval = gsap.utils.mapRange(0, window.innerWidth, (rectWidth/2) + 100, window.innerWidth - ((rectWidth/2) + 100), dets.clientX);
    let yval = gsap.utils.mapRange(0, window.innerHeight, (rectHeight/2) + 100, window.innerHeight - ((rectHeight/2) + 100), dets.clientY);
    
    gsap.to(rect,{
        left: xval + "px",
        top: yval + "px",
        ease: Power3
    })
});
