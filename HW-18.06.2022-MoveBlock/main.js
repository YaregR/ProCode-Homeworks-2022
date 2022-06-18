const elBlock = document.querySelector('.block');
const arrowUp = document.querySelector('.arrow-up');
const arrowLeft = document.querySelector('.arrow-left');
const arrowDown = document.querySelector('.arrow-down');
const arrowRight = document.querySelector('.arrow-right');


arrowUp.addEventListener('click', () => {
    let elBlockTop=parseInt(elBlock.style.top);
    if(elBlockTop > 0 && elBlockTop < 600) {
        elBlock.style.top=parseInt(elBlock.style.top)-100 +'px';
    } else return;
});

arrowDown.addEventListener('click', () => {
    let elBlockTop=parseInt(elBlock.style.top);
    if(elBlockTop === 0 || elBlockTop < 500) {
        elBlock.style.top=parseInt(elBlock.style.top)+100 +'px';
    } else return;
});

arrowLeft.addEventListener('click', () => {
    let elBlockLeft=parseInt(elBlock.style.left);
    if(elBlockLeft > 0 && elBlockLeft < 800) {
        elBlock.style.left=parseInt(elBlock.style.left)-100 +'px';
    } else return;
});

arrowRight.addEventListener('click', () => {
    let elBlockLeft=parseInt(elBlock.style.left);
    if(elBlockLeft === 0 || elBlockLeft < 700) {
        elBlock.style.left=parseInt(elBlock.style.left)+100 +'px';
    } else return;
}); 

addEventListener('keydown', (ev) => {
    let elBlockTop=parseInt(elBlock.style.top);
    let elBlockLeft=parseInt(elBlock.style.left);
    switch (ev.code) {
        case 'ArrowUp':
            if(elBlockTop > 0 && elBlockTop < 600) {
                elBlock.style.top=parseInt(elBlock.style.top)-100 +'px';
            } else return;
            break;
        case 'ArrowDown':
            if(elBlockTop === 0 || elBlockTop < 500) {
                elBlock.style.top=parseInt(elBlock.style.top)+100 +'px';
            } else return;
            break; 
        case 'ArrowLeft': 
            if(elBlockLeft > 0 && elBlockLeft < 800) {
                elBlock.style.left=parseInt(elBlock.style.left)-100 +'px';
            } else return;
            break; 
        case 'ArrowRight': 
            if(elBlockLeft === 0 || elBlockLeft < 700) {
                elBlock.style.left=parseInt(elBlock.style.left)+100 +'px';
            } else return;
            break;    
    }   
});