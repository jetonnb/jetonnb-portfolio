
const songs = [
    {
        title: "Mockingbird",
        artist: "Eminem",
        file: "musics/song1.mp3",
        image: "images/eminem1.jpeg"
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        file: "musics/song2.mp3",
        image: "images/theweeknd.png"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        file: "musics/song3.mp3",
        image: "images/levitatingg.jpg"
    },
    {
        title: "Old Town Road",
        artist: "Lil Nas X ft. Billy Ray Cyrus",
        file: "musics/song4.mp3",
        image: "images/oldtownroad.jpg"
    },
    {
        title: "Summertime Sadness",
        artist: "Lana Del Rey",
        file: "musics/song5.mp3",
        image: "images/summertime.jpg"
    }
];


const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const albumCover = document.getElementById('album-cover');
const introOverlay = document.getElementById('intro-overlay');
const startBtn = document.getElementById('start-btn');


let songIndex = 0;
let isPlaying = false;


function loadSong(song) {
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audio.src = song.file;
    albumCover.src = song.image;

    // Reset time display
    currentTimeEl.textContent = "0:00";
    durationEl.textContent = "0:00";
    
    // Remove any previous event listeners to avoid duplication
    audio.removeEventListener('timeupdate', updateProgress);
    audio.removeEventListener('loadedmetadata', updateMetadata);

    // Load the song and add event listeners
    audio.addEventListener('loadedmetadata', updateMetadata);
    audio.addEventListener('timeupdate', updateProgress);
}

function updateMetadata() {
    const duration = audio.duration;
    if (!isNaN(duration)) {
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);
        durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
    }
}

function updateProgress() {
    const { duration, currentTime } = audio;
    if (!isNaN(duration)) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.setProperty('--val', progressPercent);
        progressBar.value = progressPercent;

        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
    }
}

function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6zm8-14v14h4V5h-4z"/>
        </svg>
    `;
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7L8 5z"/>
        </svg>
    `;
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener('click', prevSong);
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener('click', nextSong);
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

startBtn.addEventListener('click', () => {
    introOverlay.classList.add('hidden');
    loadSong(songs[songIndex]);
    playSong(); // Automatically play the song when the overlay is hidden
});

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

// Event listener for when the song ends
audio.addEventListener('ended', nextSong);

// Initial song load
loadSong(songs[songIndex]);


// Initial song load
loadSong(songs[songIndex]);

