// Ses dosyaları
const sounds = {
    samet: new Audio('samet.mp3'),
    apo: new Audio('apo.mp3'),
    berk: new Audio('berk.mp3'),
    berat: new Audio('berat.mp3')
};

// Karakter bilgisi ve ses çalma
function playSound(character) {
    // Karakterin bilgilerini güncelleme
    document.getElementById('info').innerHTML = `<p>${character} karakterini seçtiniz!</p>`;
    
    // Mevcut sesleri durdurma ve sıfırlama
    for (let key in sounds) {
        sounds[key].pause();
        sounds[key].currentTime = 0;  // Sesin başa sarılmasını sağlar
    }
    
    // Seçilen karakterin sesini çalma
    sounds[character].play();
}

// Rastgele ses çalma fonksiyonu
function playRandomSound() {
    const keys = Object.keys(sounds);
    const randomCharacter = keys[Math.floor(Math.random() * keys.length)];
    playSound(randomCharacter);
}