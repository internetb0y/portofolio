// Update This File
document.addEventListener('DOMContentLoaded', () => {
    const socialBtn = document.querySelector('#social');

    socialBtn.addEventListener('click', () => {
        document.querySelector('.children-social').classList.toggle('show');
    })

    const popup = document.querySelector('#popup');

    setTimeout(() => {
        popup.showModal();

        const close = document.querySelector('#close');

        close.addEventListener('click', () => {
            popup.close();
        })
    }, 0);
})