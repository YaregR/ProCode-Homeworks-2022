const inputEl = document.querySelector('input');
const textEl = document.querySelector('.view-text');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
    textEl.innerHTML = inputEl.value;
});

