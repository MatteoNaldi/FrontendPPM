document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const search = document.getElementById('search');

    menu.addEventListener('click', function(e) {
        e.preventDefault()
        document.getElementById('sidebar').classList.toggle('active');
        document.body.classList.toggle('active');
    });

    close.addEventListener('click', function(e) {
        e.preventDefault()
        document.getElementById('sidebar').classList.remove('active');
        document.body.classList.remove('active');
    });

    search.addEventListener('click', function(e) {
        e.preventDefault()
        let text = document.getElementById('search-input').value;
        alert(`You searched for: ${text}`);
    });
});