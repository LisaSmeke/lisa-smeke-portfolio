// console.log("Hello World, I'm Lisa");
// console.log(typeof 'Lisa');

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
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

// function myClickFunction() {
//   var elementName = document.getElementById('click-demo');
//   if (elementName.style.fontStyle != 'italic') {
//     elementName.style.fontStyle = 'italic';
//   } else {
//     elementName.style.fontStyle = 'normal';
//   }
// }
