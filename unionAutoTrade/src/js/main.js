"use strict"
const tabsTitle = document.querySelectorAll('.tab_title');
const tabsContent = document.querySelectorAll('.tab_content');

tabsTitle.forEach(item => item.addEventListener('click', event => {
    const tabTitleTarget = event.target.getAttribute('data-tab');
    tabsTitle.forEach(el => el.classList.remove('active_tab'));
    tabsContent.forEach(el => el.classList.add('hidden_tab-content'))
    item.classList.add('active_tab');
    document.getElementById(tabTitleTarget).classList.remove('hidden_tab-content')
}))


const tarif = document.querySelectorAll('.card>h3');

tarif.forEach(tarifItem => {
    tarifItem.addEventListener('click', event => {
        tarifItem.classList.toggle('show');
        const tarifItemContetnt = tarifItem.nextElementSibling;
        if (tarifItem.classList.contains('show')) {
            tarifItemContetnt.style.maxHeight = tarifItemContetnt.scrollHeight + 'px';
        } else {
            tarifItemContetnt.style.maxHeight = 0;
        }
    })
})



// const currently = document.querySelector('.price_container-active');
// if (currently && currently !== tarifItem) {
//     currently.classList.toggle('price_container-active');
//     currently.nextElementSibling.style.maxHeight = 0;
// }