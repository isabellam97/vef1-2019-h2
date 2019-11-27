import List from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  // eslint-disable-next-line no-empty
  if (isLecturePage) {

  } else {
    const list = new List();
    list.load();
  }
});
