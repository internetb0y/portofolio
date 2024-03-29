document.addEventListener('DOMContentLoaded', () => {
    const socialBtn = document.querySelector('#social');

    socialBtn.addEventListener('click', () => {
        document.querySelector('.children-social').classList.toggle('show');
    })
})