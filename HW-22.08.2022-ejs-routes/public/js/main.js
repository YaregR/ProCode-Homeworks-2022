
const itemEl = document.querySelector('.items-wrapper');
const preloader = document.querySelector('.preloader');

const getItems = async() => {

    preloader.classList.add('active');

    const items = await axios.get('http://localhost:3000/items');
       
    for (let i in items.data) { 
        // let itemId = items.data[i].id;
        let item = `<a href="products/` + items.data[i].id + `"><div class="main-item">` + items.data[i].name + "</div></a>"; 
        itemEl.insertAdjacentHTML('beforeend', item);
    }
    
    preloader.classList.remove('active');  
}

getItems();


