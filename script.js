document.getElementById('scroll-left').addEventListener('click', function() {
    document.querySelector('.container').scrollBy({
        left: -300, // ajuste este valor conforme necessário
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.querySelector('.container').scrollBy({
        left: 300, // ajuste este valor conforme necessário
        behavior: 'smooth'
    });
});