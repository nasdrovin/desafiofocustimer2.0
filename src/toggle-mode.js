const switchBtn = document.querySelector('#switch')

switchBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light')
})