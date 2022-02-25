console.log('hello');
let audioElement = new Audio('laganlagi.mp3');
let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click',()=>{

    masterPlay.classList.remo('')
    audioElement.play();
    masterPlay.src = "pause.png";
});
