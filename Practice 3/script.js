var center = document.querySelector('#center');

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
    let now = new Date().getTime();
    console.log(now - prev, delay);
    if (now - prev > delay) {
        prev = now;
        return func(...args);
    }
    }
}

center.addEventListener("mousemove",throttleFunction((dets) => {
    var div = document.createElement('div');
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px"; 
    div.style.top = dets.clientY + "px"; 
    
    var img = document.createElement('img');
    img.setAttribute("src","https://images.unsplash.com/photo-1721296375090-f8cb95f5aeac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    // If you wanna add more images then, make an array list + use random fun() - refers docs and research.
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img,{
        y: "0",
        ease: Power1,
        duration: 0.6
    });

    gsap.to(img,{
        y: "100%",
        ease: Power3,
        delay: 1
    });

    setTimeout(()=>{
        document.body.removeChild(div);
    },1500);
}, 400));
