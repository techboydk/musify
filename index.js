///////////////////carousel//////////

const carousel = [...document.querySelectorAll('.carousel img')];

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');
    if (carouselImageIndex >= carousel.length - 1) {
        carouselImageIndex = 0;
    } else {
        carouselImageIndex++;
    }

    carousel[carouselImageIndex].classList.toggle('active');

}

setInterval(() => {
    changeCarousel();
}, 3000)

/////////////////////////////////////
///////////music player toggler//////

const musicPlayerSection = document.querySelector('.music-player-section');
let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    if (clickCount >= 2) {
        musicPlayerSection.classList.add('active');
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
})

///// accessing the playing list////
const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', () => {
    playlistSection.classList.add('active');
});

///////////back to music player//////////////
const backToMusicPlayer = document.querySelector('.playlist .back-btn');
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

const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
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
            forwardBtn.click();
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
