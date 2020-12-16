console.log('it works');

/*
  Search elements
*/

const openAddBtn = document.querySelector('.openAdd');
const addForm = document.querySelector('.add-form');
const addFormInput = document.querySelector('.add-form-input');
const formCancelBtn = document.querySelector('.add-form-cancel');
const imagesList = document.querySelector('.images-list');

/*
  Functions
*/

function openForm() {
  openAddBtn.classList.add('display-none');
  addForm.classList.remove('display-none');
}

function closeForm() {
  addForm.reset();
  openAddBtn.classList.remove('display-none');
  addForm.classList.add('display-none');
}

function submitForm(e) {
  const file = e.target[0].files[0];
  const newImg = document.createElement('img');
  newImg.src = URL.createObjectURL(file);
  newImg.classList.add('image');
  imagesList.appendChild(newImg);
}

/*
  Add Listeners
*/

openAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openForm();
});

formCancelBtn.addEventListener('click', (e) => {
  e.preventDefault();
  closeForm();
});

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(addFormInput);
  submitForm(e);
  closeForm();
});

addFormInput.addEventListener('drarover', (e) => {
  e.preventDefault();
});

addFormInput.addEventListener('drop', (e) => {
  e.preventDefault();
  addFormInput.files = e.dataTransfer.files;
});
