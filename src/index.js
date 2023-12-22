const pageHeader = document.getElementById('page-header');

let lastYPosition = 0;

function scrollHideHeader() {
  // get scroll
  let scrollDelta = this.scrollY;
  let classToAdd = 'is-minimized';

  // scroll up, show header, scroll down, hide header
  if(scrollDelta < lastYPosition) {
    pageHeader.classList.remove(classToAdd);
  }
  else if (scrollDelta > lastYPosition) {
      pageHeader.classList.add(classToAdd);
  }

  lastYPosition = scrollDelta;
}



const linkItems = document.querySelectorAll('.header-link-item');
linkItems.forEach(element => {
  const borderElement = element.querySelector('.bottom-border');

  element.addEventListener('mouseover', () => {
    borderElement.classList.add('is-hovered');
  });

  element.addEventListener('mouseout', () => {
    borderElement.classList.remove('is-hovered');
  });
});

const mobileMenuDropdown = document.querySelector('.dropdown-button');
const mobileMenu = document.querySelector('.nav-section');

mobileMenuDropdown.addEventListener('click', () => {

  // if the menu is already dropped
  if(mobileMenu.classList.contains('is-dropped')) {
    // turn = into X
  } else {
    // turn X into =
  }

  mobileMenu.classList.toggle('is-displayed');
})

document.addEventListener('scroll', () => {
  if (mobileMenu.classList.contains('is-displayed')) {
    mobileMenu.classList.remove('is-displayed');
  }
  scrollHideHeader()
});