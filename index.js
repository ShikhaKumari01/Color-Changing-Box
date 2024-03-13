let fetch=document.querySelector("#container");
fetch.addEventListener('mousemove',function(details){
    var AxisAll=fetch.getBoundingClientRect();
    var widthInX=details.clientX;
    if(AxisAll.width/2>widthInX-AxisAll.left){
        var redColor=gsap.utils.mapRange(0, AxisAll.width/2,255, 0, widthInX-AxisAll.left);
        gsap.to(fetch,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4
        })
    }
    else{
        var blueColor=gsap.utils.mapRange(AxisAll.width/2, AxisAll.width,0,255, widthInX-AxisAll.left);
        gsap.to(fetch,{
            backgroundColor:`rgb(0,${blueColor},0)`,
            ease:Power4
        })
    }
})
fetch.addEventListener('mouseleave',function(details){
    gsap.to(fetch,{
        backgroundColor:"white",
    })
}
    
)
