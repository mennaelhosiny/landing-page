function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("open");
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector(".nav-links").classList.remove("open");
    });
});

