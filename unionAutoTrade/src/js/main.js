const tabsTitle = document.querySelectorAll('.tab_title');
const tabsContent = document.querySelectorAll('.tab_content');

tabsTitle.forEach(item => item.addEventListener('click', event => {
    const tabTitleTarget = event.target.getAttribute('data-tab');
    tabsTitle.forEach(el => el.classList.remove('active_tab'));
    tabsContent.forEach(el => el.classList.add('hidden_tab-content'))
    item.classList.add('active_tab');
    document.getElementById(tabTitleTarget).classList.remove('hidden_tab-content')
}))


console.log('1 1 1 1')