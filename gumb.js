function setActive(link) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
}
