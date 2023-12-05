const burger = document.getElementById('burger')
const close = document.getElementById('close')
const menu = document.getElementById('menu')

burger.addEventListener('click', function() {
    menu.style.right = 0
})

close.addEventListener('click', function() {
    menu.style.right = '-10000000px'
})