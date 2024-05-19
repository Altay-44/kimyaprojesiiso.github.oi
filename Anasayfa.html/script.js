    // Düğmeler için tıklama olaylarını ekle ve yönlendirme işlemini gerçekleştir
    function goToURL(url) {
        // Sayfa geçişinden önce efekt uygula
        document.body.classList.add("fade-out");

        // Yönlendirme işlemini gerçekleştir
        setTimeout(function() {
            window.location.href = url;
        }, 500); // 500 milisaniye beklet
    }

function goToStudentLogin() {
    window.location.href = 'ogrenci_girisi.html';
}

function goToTeacherLogin() {
    window.location.href = 'ogretmen_girisi.html';
}

function goToQuestions() {
    window.location.href = 'sorular.html';
}

function goToAbout() {
    window.location.href = 'hakkinda.html';
}
