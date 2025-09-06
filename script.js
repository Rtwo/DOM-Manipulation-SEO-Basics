/* script.js
   DOM tasks for Part A:
   - Change paragraph text when #changeTextBtn clicked
   - Add a new <li> to #reasons-list when #addItemBtn clicked
   - Remove an element when #removeElementBtn clicked
*/

document.addEventListener('DOMContentLoaded', function () {
  const changeTextBtn = document.getElementById('changeTextBtn');
  const addItemBtn = document.getElementById('addItemBtn');
  const removeElementBtn = document.getElementById('removeElementBtn');

  const paragraph = () => document.getElementById('target-paragraph');
  const list = () => document.getElementById('reasons-list');

  // 1) Change paragraph text
  changeTextBtn.addEventListener('click', function () {
    const p = paragraph();
    if (p) {
      p.textContent = 'Mobile games like ML and CODM give me excitement, quick fun, and a way to stay connected with friends on the go.';
    } else {
      alert('Paragraph was already removed. Nothing to change.');
    }
  });

  // 2) Add new list item
  addItemBtn.addEventListener('click', function () {
    const ul = list();
    if (!ul) {
      alert('List not found. Cannot add item.');
      return;
    }
    const li = document.createElement('li');
    li.textContent = 'Huge variety of heroes, weapons, and events';
    ul.appendChild(li);
    li.tabIndex = -1;
    li.focus();
  });

  // 3) Remove element
  removeElementBtn.addEventListener('click', function () {
    const p = paragraph();
    const ul = list();

    if (p) {
      p.remove();
      return;
    }

    if (ul && ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
      return;
    }

    alert('Nothing left to remove.');
  });
});
