function playSurah(src) {
    const mainContent = document.getElementById('main-content')
    const audioContainer = document.getElementById('audio-container');
    const audioPlayer = document.getElementById('audioPlayer');
    const currentSurah = document.getElementById('current-surah')
    audioPlayer.src = src;
    audioPlayer.play();
    mainContent.style.display = 'none'
    audioContainer.style.display = 'block';
    currentSurah.style.display = 'block'
}
