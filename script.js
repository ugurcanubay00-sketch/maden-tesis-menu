/* =========================================
   1. GİRİŞ EKRANI VE MENÜ GEÇİŞ FONKSİYONLARI
   ========================================= */

// Menüyü Açma Animasyonu
function menuyuGoster() {
    const girisEkrani = document.getElementById('giris-ekrani');
    const anaIcerik = document.getElementById('ana-icerik');

    // Giriş ekranını saydamlaştırıyoruz (fade-out)
    girisEkrani.classList.add('gizle');
    
    // Ana içeriği görünür yapıyoruz
    anaIcerik.style.display = 'block';

    // Animasyon (0.4s) bittikten sonra giriş ekranını DOM akışından kaldırıyoruz
    setTimeout(() => {
        girisEkrani.style.display = 'none';
    }, 400); 
}

// Ana Ekrana (Giriş) Geri Dönme Animasyonu
function anaEkranaDon() {
    const girisEkrani = document.getElementById('giris-ekrani');
    const anaIcerik = document.getElementById('ana-icerik');

    // Giriş ekranını tekrar DOM akışına sokuyoruz ama henüz görünmez (saydam)
    girisEkrani.style.display = 'flex';
    
    // Gecikme ile saydamlığı kaldırıp ekranda belirmesini sağlıyoruz (fade-in)
    setTimeout(() => {
        girisEkrani.classList.remove('gizle');
        // Menü içeriğini gizliyoruz
        anaIcerik.style.display = 'none';
    }, 10); 
}


/* =========================================
   2. KATEGORİ SEKMELERİ GEÇİŞ MANTIĞI
   ========================================= */

const kategoriKartlari = document.querySelectorAll('.kategori-kart');
const menuBolumleri = document.querySelectorAll('.menu-bolum');

kategoriKartlari.forEach(kart => {
    kart.addEventListener('click', function() {
        
        // Zaten aktif olan karta tıklandıysa işlemi durdur (Performans)
        if (this.classList.contains('aktif')) return;

        // 1. Sekmelerin Durumunu Güncelle
        document.querySelector('.kategori-kart.aktif').classList.remove('aktif');
        this.classList.add('aktif');

        // 2. Tıklanan hedefin ID'sini al (örn: sicak-icecekler)
        const hedefID = this.getAttribute('data-hedef');
        const hedefBolum = document.getElementById(hedefID);

        // 3. Menü Bölümlerini Değiştir
        document.querySelector('.menu-bolum.aktif-bolum').classList.remove('aktif-bolum');
        hedefBolum.classList.add('aktif-bolum');
        
    });
});