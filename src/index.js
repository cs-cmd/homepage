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

document.addEventListener('scroll', () => scrollHideHeader());