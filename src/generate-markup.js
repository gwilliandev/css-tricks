const generateMarkup = async (id) => {
  const container = document.querySelector('#' + id);
  const content = document.querySelector('[data-content="' + id + '"]');
  const lines = content.outerHTML.split('\n').length;
  container.setAttribute('rows', lines);
  container.innerHTML = `\t${content.outerHTML}`;
}

const getAllMarkups = () => {
  const markups = document.querySelectorAll('textarea[id]');
  markups.forEach((markup) => {
    const id = markup.id;
    generateMarkup(id);
  });
}

getAllMarkups();