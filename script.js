function cariHero() {
    // Ambil input dari user dan ubah ke huruf kecil agar pencarian tidak sensitif huruf besar/kecil
    const input = document.getElementById("heroInput").value.trim().toLowerCase();
    
    // Ambil elemen HTML yang dibutuhkan
    const resultCard = document.getElementById("resultCard");
    const errorMsg = document.getElementById("errorMsg");
    
    const heroName = document.getElementById("heroName");
    const heroRole = document.getElementById("heroRole");
    const counterHeroes = document.getElementById("counterHeroes");
    const counterItems = document.getElementById("counterItems");
    const tipsText = document.getElementById("tipsText");

    // Sembunyikan dulu hasil lama dan pesan error sebelum mencari
    resultCard.style.display = "none";
    errorMsg.style.display = "none";

    // Validasi jika input kosong
    if (input === "") {
        alert("Silakan masukkan nama hero terlebih dahulu!");
        return;
    }

    // Cari hero di dalam heroDatabase (berasal dari database.js)
    const heroDitemukan = heroDatabase.find(hero => hero.nama.toLowerCase() === input);

    if (heroDitemukan) {
        // 1. Tampilkan Nama dan Role
        heroName.textContent = heroDitemukan.nama;
        heroRole.textContent = heroDitemukan.role;
        
        // 2. Tampilkan Rekomendasi Hero Counter
        counterHeroes.textContent = heroDitemukan.counter;
        
        // 3. Tampilkan Item Defense (Dibuat menjadi komponen tag/badge sesuai CSS Anda)
        counterItems.innerHTML = ""; // Bersihkan item lama
        heroDitemukan.items.forEach(item => {
            const tagSpan = document.createElement("span");
            tagSpan.className = "tag";
            tagSpan.textContent = item;
            counterItems.appendChild(tagSpan);
        });

        // 4. Tampilkan Tips Strategi
        tipsText.textContent = heroDitemukan.tips;

        // Tampilkan kartu hasil
        resultCard.style.display = "block";
    } else {
        // Tampilkan pesan error jika hero tidak ditemukan
        errorMsg.style.display = "block";
    }
}

// Fitur Tambahan: Menekan tombol 'Enter' di keyboard juga memicu pencarian
document.getElementById("heroInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        cariHero();
    }
});