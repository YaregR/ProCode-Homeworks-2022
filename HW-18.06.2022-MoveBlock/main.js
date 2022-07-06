const elField = document.querySelector('.field');
const selectFieldWidth = document.querySelector('[name="field-width"]');
const selectFieldHeight = document.querySelector('[name="field-height"]');

// const form = document.forms.field;

const elBlock = document.querySelector('.block');

const arrowUp = document.querySelector('.arrow-up');
const arrowLeft = document.querySelector('.arrow-left');
const arrowDown = document.querySelector('.arrow-down');
const arrowRight = document.querySelector('.arrow-right');

selectFieldWidth.addEventListener('change', (ev) => {
    let getWidth = ev.target.value;
    elField.style.width = getWidth +'px';
});

selectFieldHeight.addEventListener('change', (ev) => {
    let getHeight = ev.target.value;
    elField.style.height = getHeight +'px';
});

// Вариант формы с кнопкой:

// form.addEventListener('submit', (ev) => {
//     ev.preventDefault();
//     let formData = new FormData(ev.target);
//     let getWidth = formData.get('field-width');
//     let getHeight = formData.get('field-height');
//     elField.style.width = getWidth +'px';
//     elField.style.height = getHeight +'px';
// })

arrowUp.addEventListener('click', () => {
    let elFieldHeight = parseInt(elField.style.height);
    let elBlockTop=parseInt(elBlock.style.top);
    let elBlockLeft=parseInt(elBlock.style.left);
    if((elBlockTop > 0 && elBlockTop < elFieldHeight) && (elBlockLeft !== 500 || elBlockTop !== 200)) {
        elBlock.style.top=parseInt(elBlock.style.top)-100 +'px';
    } else return;
});

arrowDown.addEventListener('click', () => {
    let elFieldHeight = parseInt(elField.style.height);
    let elBlockTop=parseInt(elBlock.style.top);
    let elBlockLeft=parseInt(elBlock.style.left);
    if((elBlockTop === 0 || elBlockTop < elFieldHeight-100) && (elBlockLeft !== 500 || elBlockTop !== 0)) {
        elBlock.style.top=parseInt(elBlock.style.top)+100 +'px';
    } else return;
});

arrowLeft.addEventListener('click', () => {
    let elFieldWidth = parseInt(elField.style.width);
    let elBlockTop=parseInt(elBlock.style.top);
    let elBlockLeft=parseInt(elBlock.style.left);
    if((elBlockLeft > 0 && elBlockLeft < elFieldWidth) && (elBlockLeft !== 600 || elBlockTop !== 100)) {
        elBlock.style.left=parseInt(elBlock.style.left)-100 +'px';
    } else return;
});

arrowRight.addEventListener('click', () => {
    let elFieldWidth = parseInt(elField.style.width);
    let elBlockTop=parseInt(elBlock.style.top);
    let elBlockLeft=parseInt(elBlock.style.left);
    if((elBlockLeft === 0 || elBlockLeft < (elFieldWidth - 100)) && (elBlockLeft !== 400 || elBlockTop !== 100)) {
        elBlock.style.left=parseInt(elBlock.style.left)+100 +'px';
    } else return;
}); 

addEventListener('keydown', (ev) => {
    let elFieldWidth = parseInt(elField.style.width);
    let elFieldHeight = parseInt(elField.style.height);
    let elBlockTop=parseInt(elBlock.style.top);
    let elBlockLeft=parseInt(elBlock.style.left);
    switch (ev.code) {
        case 'ArrowUp':
            if((elBlockTop > 0 && elBlockTop < elFieldHeight) && (elBlockLeft !== 500 || elBlockTop !== 200)) {
                elBlock.style.top=parseInt(elBlock.style.top)-100 +'px';
            } else return;
            break;
        case 'ArrowDown':
            if((elBlockTop === 0 || elBlockTop < elFieldHeight-100) && (elBlockLeft !== 500 || elBlockTop !== 0)) {
                elBlock.style.top=parseInt(elBlock.style.top)+100 +'px';
            } else return;
            break; 
        case 'ArrowLeft': 
            if((elBlockLeft > 0 && elBlockLeft < elFieldWidth) && (elBlockLeft !== 600 || elBlockTop !== 100)) {
                elBlock.style.left=parseInt(elBlock.style.left)-100 +'px';
            } else return;
            break; 
        case 'ArrowRight': 
            if((elBlockLeft === 0 || elBlockLeft < elFieldWidth-100) && (elBlockLeft !== 400 || elBlockTop !== 100)) {
                elBlock.style.left=parseInt(elBlock.style.left)+100 +'px';
            } else return;
            break;    
    }   
});