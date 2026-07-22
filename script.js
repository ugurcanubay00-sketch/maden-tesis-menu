// 1. Sayfadaki tüm yuvarlak kategori kartlarını ve menü bölümlerini seçiyoruz
const kategoriKartlari = document.querySelectorAll('.kategori-kart');
const menuBolumleri = document.querySelectorAll('.menu-bolum');

// 2. Her bir kategori kartı için bir tıklama dinleyicisi oluşturuyoruz
kategoriKartlari.forEach(kart => {
    kart.addEventListener('click', function() {
        
        // Eğer zaten aktif olan karta tıklandıysa hiçbir şey yapma (performans için)
        if (this.classList.contains('aktif')) return;

        // 3. Aktif kartı değiştirme
        // Önce mevcut aktif olan karttan 'aktif' sınıfını kaldırıyoruz
        document.querySelector('.kategori-kart.aktif').classList.remove('aktif');
        // Tıklanan yeni karta 'aktif' sınıfını ekliyoruz (böylece rengi sarı oluyor)
        this.classList.add('aktif');

        // 4. Ekrana gelecek menü bölümünü belirleme
        // Tıklanan kartın içindeki 'data-hedef' değerini alıyoruz (örn: 'izgaralar')
        const hedefID = this.getAttribute('data-hedef');
        const hedefBolum = document.getElementById(hedefID);

        // 5. Menü bölümlerini değiştirme
        // Önce ekranda açık olan eski bölümden 'aktif-bolum' sınıfını kaldırarak gizliyoruz
        document.querySelector('.menu-bolum.aktif-bolum').classList.remove('aktif-bolum');
        // Yeni hedef bölüme 'aktif-bolum' sınıfını ekleyerek animasyonla ekrana getiriyoruz
        hedefBolum.classList.add('aktif-bolum');
        
    });
});