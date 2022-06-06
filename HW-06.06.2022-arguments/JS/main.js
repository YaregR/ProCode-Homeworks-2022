
const elName = document.querySelector('.name');
const elSecondName = document.querySelector('.second-name');
const elBtn = document.querySelector('.btn');
const elStatus = document.querySelector('.status');

elBtn.addEventListener('click', () => {
    const run = (a, b) => {
        elStatus.innerHTML='Привет, '+a +' ' +b;
    };

    run(elName.value, elSecondName.value);
});
