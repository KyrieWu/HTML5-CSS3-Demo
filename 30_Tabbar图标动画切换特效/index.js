let items = document.querySelectorAll('.item')
let active_circle = document.querySelector('.active-circle');

function setActive(_t, bg_color) {
    items.forEach(item => item.classList.remove('active'));

    _t.classList.add('active')
    active_circle.classList.add('jello')

    setTimeout(() => active_circle.classList.remove('jello'), 500)

    document.documentElement.style.setProperty('--bg-color', 'var(' + bg_color + ')')
}