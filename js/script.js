// Update This File
const greetingsModal = () => {
    setTimeout(() => {
        document.querySelector('#popup').showModal();

        const close = document.querySelector('#close');
        close.addEventListener('click', () => popup.close());
    }, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    greetingsModal();

    const socialBtn = document.querySelector('#social');
    socialBtn.addEventListener('click', () => document.querySelector('.children-social').classList.toggle('show'));
})