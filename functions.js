// Sayfa yüklendiğinde konsola bir selamlama gönderir
window.onload = function() {
    console.log("Mechanist Rail web sitesine hoş geldiniz!");
    
    // Basit bir etkileşim: Sitedeki logoya tıklandığında bir uyarı verir
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        alert("Mechanist Rail: Geleceğin Mekaniğini Tasarlıyoruz!");
    });
};