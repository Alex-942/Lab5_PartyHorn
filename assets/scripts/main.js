var volNumber = document.getElementById("volume-number");
var volSlider = document.getElementById("volume-slider");
var noise = document.getElementById("volume-image");

var currSound = document.getElementById("horn-sound");
var currSoundImage = document.getElementById("sound-image");

var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var btn = document.getElementById("honk-btn");


// volume for slider and number are linked
function updateNumber(){
    volNumber.setAttribute("value",volSlider.getAttribute("value"));
}
function updateSlider(){
    volSlider.setAttribute("value",volNumber.getAttribute("value"));
}
// Do this one last so it doesnt matter which value u read in
function updateVolume(){
    if(volNumber.getAttribute("value") == 0){
        noise.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        currSound.volume = 0.0;
    }
    else if(volNumber.getAttribute("value") < 34){
        noise.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        currSound.volume = 0.33;
    }
    else if(volNumber.getAttribute("value") < 67){
        noise.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        currSound.volume = 0.66;
    }
    else{
        noise.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        currSound.volume = 1.0;
    }
}

function numberChanged(){
    updateSlider();
    updateVolume();
}

function sliderChanged(){
    updateNumber();
    updateVolume();
}

// set other radios to unchecked and set the scr and image to the airHorn
function airHornActivated(){
    //carHorn.setAttribute("checked", false);
    //partyHorn.setAttribute("checked", false);
    currSound.setAttribute("src", "./assets/media/audio/air-horn.mp3");
    currSoundImage.setAttribute("src", "./assets/media/images/air-horn.svg");
}

// set other radios to unchecked and set the scr and image to the carHorn
function carHornActivated(){
    //airHorn.setAttribute("checked", false);
    //partyHorn.setAttribute("checked", false);
    currSound.setAttribute("src", "./assets/media/audio/car-horn.mp3");
    currSoundImage.setAttribute("src", "./assets/media/images/car.svg");
}

// set other radios to unchecked and set the scr and image to the partyHorn
function partyHornActivated(){
    //airHorn.setAttribute("checked", false);
    //carHorn.setAttribute("checked", false);
    currSound.setAttribute("src", "./assets/media/audio/party-horn.mp3");
    currSoundImage.setAttribute("src", "./assets/media/images/party-horn.svg");
}

function playSound(){
    if(volNumber.getAttribute("value") != 0){
        currSound.play();
    }
}


//volSlider.setAttribute("value",volNumber.getAttribute("value")); 

volNumber.addEventListener("change", numberChanged);
volSlider.addEventListener("change", sliderChanged);
airHorn.addEventListener("click", airHornActivated);
carHorn.addEventListener("click", carHornActivated);
partyHorn.addEventListener("click", partyHornActivated);
btn.addEventListener("click", function(event){
    //event.preventDefault();
    playSound();
  });
//btn.addEventListener("click", playSound());