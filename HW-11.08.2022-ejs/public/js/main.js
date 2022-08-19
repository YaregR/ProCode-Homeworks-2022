
const itemEl = document.querySelector('.items-wrapper');
const preloader = document.querySelector('.preloader');

window.onload = function () {
    preloader.style.display = 'none';
}


const getItems = async() => {
    const items = await axios.get('http://localhost:3000/items');
       
    for (let i in items.data) { 
        // let itemId = items.data[i].id;
        let item = `<a href="products/` + items.data[i].id + `"><div class="main-item">` + items.data[i].name + "</div></a>"; 
        itemEl.insertAdjacentHTML('beforeend', item);
    }  
}

getItems();

