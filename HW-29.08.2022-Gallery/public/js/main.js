
const formGallery = document.forms.gallery;
const photosEl = document.querySelector('.photo_amount_sum');
const priceEl = document.querySelector('.total_price_sum');
const price = 30;
const selectAllBtn = document.querySelector('.select_btn');
const clearAllBtn = document.querySelector('.clear_btn');


selectAllBtn.addEventListener('click', () => {

   const checkedPhotosAll = document.querySelectorAll('.photo_check_selected');
   for(let i=0; i<checkedPhotosAll.length; i++){  
      if(checkedPhotosAll[i].type=='checkbox') {
         checkedPhotosAll[i].checked=true;
      }         
   }
   const sumPhotos = checkedPhotosAll.length;
   
   photosEl.innerHTML = sumPhotos;
   priceEl.innerHTML = sumPhotos*price;

});

clearAllBtn.addEventListener('click', () => {

   let checkedPhotosAll = document.querySelectorAll('.photo_check_selected');
   for(let i=0; i<checkedPhotosAll.length; i++){  
      if(checkedPhotosAll[i].type=='checkbox') {
         checkedPhotosAll[i].checked=false;
      }         
   }
});

   
formGallery.addEventListener('change', () => {

   const checkedPhotos = document.querySelectorAll('.photo_check_selected:checked');
   const sumPhotos = checkedPhotos.length;
   
   photosEl.innerHTML = sumPhotos;
   priceEl.innerHTML = sumPhotos*price;

});      