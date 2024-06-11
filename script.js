function playSurah(src) {
    const audioContainer = document.getElementById('audio-container');
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = src;
    audioPlayer.play();
    audioContainer.style.display = 'block';
}
