// console.log("Hello World, I'm Lisa");
// console.log(typeof 'Lisa');

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});
