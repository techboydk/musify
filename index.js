///////user input .///
const okbtn = document.querySelector('.ok');
const inputBox = document.querySelector('.userInput');
let username = document.getElementById('username');
const showUserName = document.querySelector('h3 strong');


window.addEventListener("DOMContentLoaded", function() {
    let userName = localStorage.getItem("userName");
    if (userName) {
        showUserName.innerHTML = userName;
        inputBox.classList.add('hideform');
    }
})

okbtn.addEventListener('click', () => {
    if (username.value == "") {
        document.getElementById("req").innerHTML = "*Username required";
        username.focus();
        return false;
    } else {
        showUserName.innerHTML = username.value;
        inputBox.classList.add('hideform');
    }
    localStorage.setItem("userName", username.value);
})




window.onscroll = function() { myFunction() };

var navbar = document.getElementById("greet");
var sticky1 = navbar.offsetTop - 30;

let searchBar = document.querySelector('.search-bar');
let sticky2 = searchBar.offsetTop - 10;
let homeSection = document.querySelector('.home-section');

function myFunction() {
    if (window.pageYOffset >= sticky1) {
        navbar.classList.add("disappear")

    } else {
        navbar.classList.remove("disappear");
    }
    if (window.pageYOffset >= sticky2) {
        searchBar.classList.add('sticky')
        homeSection.classList.add('overflow');

    } else {
        searchBar.classList.remove('sticky')
        homeSection.classList.remove('overflow');
    }
}
/////////////////////////////////////
///////////music player toggler//////

const musicPlayerSection = document.querySelector('.music-player-section');
const p1icon = document.querySelector('.p1icon');
const p2icon = document.querySelector('.p2icon');
let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    if (clickCount >= 2) {
        musicPlayerSection.classList.add('active');
        p1icon.classList.remove('fa-play');
        p1icon.classList.add('fa-play-circle');
        p2icon.classList.remove('fa-pause');
        p2icon.classList.add('fa-pause-circle');
        clickCount = 1;
        console.log(clickCount)
        return;
    }
    clickCount++;
    setTimeout(() => {
        clickCount = 1;
    }, 250)
})

//////////Back button to home////////

const bakcToHomeBtn = document.querySelector('.music-player-section .back-btn');
bakcToHomeBtn.addEventListener('click', () => {
    musicPlayerSection.classList.remove('active');
    p1icon.classList.add('fa-play');
    p1icon.classList.remove('fa-play-circle');
    p2icon.classList.add('fa-pause');
    p2icon.classList.remove('fa-pause-circle');
})

///// accessing the playing list////
const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.playlist');

navBtn.addEventListener('click', () => {
    playlistSection.classList.add('active');
});

///////////back to music player//////////////
const backToMusicPlayer = document.querySelector('.music-player-section');
backToMusicPlayer.addEventListener('click', () => {
    playlistSection.classList.remove('active');
});

//////////////////////////////////////////

//////adding music function////
let currentMusic = 0;
const music = document.querySelector('#audio-source');
const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');
const queue = [...document.querySelectorAll('.queue')];
///////////////all button varibale//

const forwardBtn = document.querySelector('i.fa-step-forward');
const backwardBtn = document.querySelector('i.fa-step-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const redoBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');

/////click for play icon////

playBtn.addEventListener('click', () => {
    music.play();
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
});

/////click for pause icon ////

pauseBtn.addEventListener('click', () => {
    music.pause();
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
});

///loading music ///////

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = timeFormat(music.duration);
    }, 1000);
    currentMusicTime.innerHTML = '00 : 00';
    queue.forEach(item => item.classList.remove('active'));
    queue[currentMusic].classList.add('active');
}

setMusic(0);


///////timeshow format

const timeFormat = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = '0' + min;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    return min + ' : ' + sec;
}

//////////////////////update the seek bar////
setInterval(() => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = timeFormat(music.currentTime);

    if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
        if (redoBtn.className.includes('active')) {
            setMusic(currentMusic);
            playBtn.click();
        } else {
            currentMusic++;
            setMusic(currentMusic);
            music.play();
        }
    }
}, 500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
});


////active the forwardBtn

forwardBtn.addEventListener('click', () => {
    if (playBtn.className.includes('active')) {
        playBtn.classList.remove('active');
        pauseBtn.classList.add('active');
        console.log('hey')
    }
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    music.play();
})

//active the backward btn

backwardBtn.addEventListener('click', () => {
    if (playBtn.className.includes('active')) {
        playBtn.classList.remove('active');
        pauseBtn.classList.add('active');
    }
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    music.play();
})

////active repeat btn
redoBtn.addEventListener('click', () => {
    redoBtn.classList.toggle('active');
});


//////active volume-slider

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('active');
    volumeSlider.classList.toggle('active');
    volumeSlider.value = music.volume;
})

volumeSlider.addEventListener('input', () => {
    music.volume = volumeSlider.value;
})

queue.forEach((item, i) => {
    item.addEventListener('click', () => {
        setMusic(i);
        playBtn.click();
    })
})