// console.log("Hello World, I'm Lisa");
// console.log(typeof 'Lisa');

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

/*Close navbar when click on li a */
document.querySelectorAll('ul#nav-list a').forEach((e) => {
  e.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});

/*Change top navbar color when scrolling*/
document.addEventListener('scroll', () => {
  const topNavbar = document.getElementById('top-navbar');
  if (window.scrollY > 0) {
    topNavbar.classList.add('scrolled');
  } else {
    topNavbar.classList.remove('scrolled');
  }
});
