// const axios = require('axios');
const itemEl = document.querySelector('.items-wrapper');
console.log('test');

const getItems = async() => {
    const items = await axios.get('http://localhost:3000/items');
       
    for (let i in items.data) { 
        let item = `<a href="#"><div class="main-item">` + items.data[i].name + "</div></a>"; 
        itemEl.insertAdjacentHTML('beforeend', item);
    }
   
}

getItems();

