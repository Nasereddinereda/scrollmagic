const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// Showcase
let array = [];
for (i = 0; i < 92; i++) {
    array[i] = `frame-${i + 1}.png`;
}





var i = -1; // Start point
var images = array;
var time = 40;


// Change Image
function changeImgleft() {
    if (i !== 30 && i !== 60 && i !== 0) {
        console.log(i);

        if (i > 0) {
            i--;
        } else {
            i = 90;
        }
        document.slide.src = `./screens/frame-${i + 1}-min.png`;
        setTimeout("changeImgleft()", time);
    }
}

function changeImgright() {
    if (i !== 30 && i !== 60 && i !== 90) {
        console.log(i);
        document.slide.src = `./screens/frame-${i + 1}-min.png`;

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout("changeImgright()", time);
    }
}

document.getElementById("left").addEventListener("click", function () {
    i--
    changeImgleft()
});
document.getElementById("right").addEventListener("click", function () {
    i++
    changeImgright()
});





















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
    console.log(scroll)
    if(scroll > 0.2){
        document.getElementById("text-1").className = "text-center text-muly"
        document.getElementById("left").className="d-none";
        document.getElementById("right").className="d-none";
        document.getElementById("text-1").innerHTML = '<h1 class="text-a br-bt mb-5 mt-100"> CREAVO - FÜR MEHR KREATIVES LICHT</h1><h1 class="text-b">AUF IHREN ARBEITSPLATZ AUSGERICHTET</h1>';
    }else{
        document.getElementById("text-1").className = "text-center text-muly"
        document.getElementById("left").className = "fas fa-chevron-left fa-3x cl-white";
        document.getElementById("right").className = "fas fa-chevron-right fa-3x cl-white";  
        document.getElementById("text-1").innerHTML = '<h1 class="text-a br-bt mb-5"> CREAVO - FÜR MEHR KREATIVES LICHT</h1><h1 class="text-b">AUF IHREN ARBEITSPLATZ AUSGERICHTET</h1>';      
    }

    if(scroll>0.6){
        document.getElementById("text-1").className = "d-none"
        document.getElementById("img").className = "d-none"
        document.getElementById("icon").className = "d-none"
        document.getElementById("video-1").className = "";
    }else{
        document.getElementById("video-1").className = "d-none";
        document.getElementById("img").className = ""
        document.getElementById("icon").className = "fas fa-chevron-down fa-2x"
    }
   
}