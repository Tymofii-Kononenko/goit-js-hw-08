const ulEl = document.querySelector('#categories');
const ulItem = document.querySelectorAll('li.item');

console.log(`Number of categories: ${ulItem.length}`);

ulItem.forEach(category => {
    const tittle = category.querySelector(`h2`).textContent;
    const elemntlist = category.querySelectorAll(`ul > li`).length;
    console.log(`Category : ${tittle}`);
    console.log(`Elements : ${elemntlist}`);
});
