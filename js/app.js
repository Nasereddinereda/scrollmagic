const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 14000,
    triggerElement: intro,
    triggerHook: 0
})
    // .addIndicators()
    .setPin(intro)
    .addTo(controller);


//Video Animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = -1;

scene.on("update", e => {
    scrollpos = e.scrollPos/1000;
    onscroll(scrollpos);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 100);


const onscroll = scroll => {
    console.log(scroll);
    if(scroll>0.2){
        document.getElementById("sec_1").className ="pos_abs top-0 w-full bg-dark-5  h-full tr";
        document.getElementById("text_1").className ="d-none";
    }else if(scroll<0.2) {
        document.getElementById("sec_1").className = "pos_abs top-0 w-full bg-dark-9  h-full tr";
        document.getElementById("text_1").className = "margin-top-20 text-center ft-60 cl-white d-block";
    }

    if(scroll>0.8 && scroll < 1.5){
        document.getElementById("text_2").className="d-block cl-white"
    }else if (scroll<0.8){
        document.getElementById("text_2").className = "d-none"
    } else {
        document.getElementById("text_2").className = "d-none"
    }

    if(scroll>=3 && scroll<3.6){
        document.getElementById("text_3").className = "d-block cl-white"
    }else {
        document.getElementById("text_3").className = "d-none"
    }

    if(scroll>=5.5 && scroll<6.3){
        document.getElementById("text_4").className = "d-block cl-white"
    }else{
        document.getElementById("text_4").className = "d-none"
       
    }
    if(scroll>6.3&&scroll<8.2){
        document.getElementById("sec_1").className = "pos_abs top-0 w-full   h-full tr";
    }else if (scroll>8.2 && scroll<12.3){
        document.getElementById("sec_1").className = "pos_abs top-0 w-full bg-dark-5  h-full tr";
    }else if (scroll>12.3){
        document.getElementById("sec_1").className = "pos_abs top-0 w-full bg-dark-9  h-full tr";
    }

    if(scroll>14.3){
        document.getElementById("sec_1").className = "pos_abs top-0 w-full bg-dark  h-full tr"; 
    }
}