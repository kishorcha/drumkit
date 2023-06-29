
//detecting button press
var numberOfDrums= document.querySelectorAll("button").length;

for(var i=0; i<numberOfDrums; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        
        var buttonnumber= this.innerHTML;

        makeSond(buttonnumber);
        makeAanimination(buttonnumber);
    }); 
}
//detecting keyboard press
document.addEventListener("keypress",function (event) {
    
    makeSond(event.key);
    makeAanimination(event.key);
});


function makeSond(key){
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/snare.mp3");
            audio.play(); 
            break;                  
        default:
            break;
    }
}

function makeAanimination(currentkey){
  var newnumber=  document.querySelector("."+currentkey);
  newnumber.classList.add("pressed");
  setTimeout(function(){
    newnumber.classList.remove("pressed");
  },100)  
}
