console.log('welcome');
let songIndex = 0;
let audioElement = new Audio('./songs/DJ_Snake_feat_Justin_Bieber_Let_Me_Love_You.mp3');
let masterPlay = document.getElementById('masterPlay');

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs\DJ_Snake_feat_Justin_Bieber_Let_Me_Love_You.mp3", coverPath: "covers\pexels-jonas-mohamadi-1490844.jpg"},
    
]

let myProgressBar = document.getElementById('myProgressBar');masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
    }
})