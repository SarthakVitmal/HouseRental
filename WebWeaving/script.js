document.querySelector('.ContactUs').addEventListener('click', function (e) {
    e.preventDefault();

    const getInTouch = document.querySelector('#get-in-touch');
    const offsetTop = getInTouch.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});
