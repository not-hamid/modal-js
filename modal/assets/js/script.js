const overlay = document.querySelector('.modal-overlay');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');

// window.addEventListener('DOMContentLoaded',()=>{
//     overlay.classList.add('show-modal');
// })

// openModal.addEventListener('click',()=>{
//     overlay.classList.add('show-modal');
// });
// closeModal.addEventListener('click',()=>{
//     overlay.classList.remove('show-modal')
// });

document.addEventListener('click',(e)=>{
    if(e.target.matches('#openModal')){
        overlay.classList.add('show-modal');
    }
    else if(e.target.matches('#closeModal')){
        overlay.classList.remove('show-modal')
    }
})