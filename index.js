const list = document.querySelector('#item-list');   // select <ul>
const button = document.getElementById('add-btn');

button.addEventListener('click', function () {
  // create new li
  const li = document.createElement('li');
  li.textContent = 'New Item';

  // find sequence number after adding
  const currentCount = list.children.length + 1; // new li will be this index

  // style based on odd / even
  if (currentCount % 2 === 1) {
    // odd
    li.style.fontWeight = 'bold';
    li.style.color = 'blue';
  } else {
    // even
    li.style.fontStyle = 'italic';
    li.style.color = 'red';
  }

  // append to ul
  list.appendChild(li);
});
