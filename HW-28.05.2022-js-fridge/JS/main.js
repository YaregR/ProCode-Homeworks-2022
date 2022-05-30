
const elDoor = document.querySelector('select[name="door"]');
const elFood = document.querySelector('select[name="food"]');
const elStatus = document.querySelector('.status');

const run = () => {
    const valueDoor = elDoor.value;
    const valueFood = elFood.value;

    if(valueDoor === 'close') {
        elStatus.insertAdjacentHTML('beforeend', '<div>The door is close</div>');
    } else if(valueDoor === 'open') {
        elStatus.insertAdjacentHTML('beforeend', '<div>The door is open</div>');
        if(valueFood === 'take') {
            elStatus.insertAdjacentHTML('beforeend', '<div>Take food</div>');
        } else if(valueFood === 'put') {
            elStatus.insertAdjacentHTML('beforeend', '<div>Put food</div>');
        }
    }
}

run();
elDoor.addEventListener('change', run);
elFood.addEventListener('change', run);
