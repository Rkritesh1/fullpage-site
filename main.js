document.addEventListener("DOMContentLoaded", function () {
    // Initialize FullPage.js
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        scrollOverflow: true
    });

    // Initialize AOS (Animation on Scroll)
    AOS.init();

    // Progress bar update on scroll
    window.addEventListener("scroll", function () {
        let scroll = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = (scroll / height) * 100;
        document.getElementById("progress-bar").style.width = progress + "%";
    });
});

// Toggle navigation visibility on small screens
function toggleNav() {
    document.querySelector(".nav-links").classList.toggle("active");
}
