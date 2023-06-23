import './style.css';
import Pasta from './images/pasta.jpeg';

function generateText() {
  const main = document.querySelector('main');
  main.classList.add('main');
  const description = document.createElement('div');
  description.setAttribute('id', 'description');

  const h1 = document.createElement('div');
  const subheading = document.createElement('div');
  const detail = document.createElement('div');
  const orderBtn = document.createElement('button');

  h1.innerHTML = `Chef's special`;
  subheading.innerHTML = `Bringing ocean to your mouth`;
  detail.innerHTML = `We serve classic Italian dishes made with fresh, seasonal ingredients.`
  orderBtn.classList.add('order-btn');
  orderBtn.innerHTML = `Order Now`;

  description.append(h1, subheading, detail, orderBtn);
  // return description;
  main.append(description);
}

function generatePicture() {
  const main = document.querySelector('main');
  const foodpic = document.createElement('div');
  foodpic.setAttribute('id', 'food-picture');

  const pic = document.createElement('img');
  pic.src = Pasta;
  pic.alt = 'pasta';
  pic.classList.add('pasta');

  foodpic.appendChild(pic);
  // return foodPic;
  main.append(foodpic);
}

function displayHome() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.style = '';
  main.classList.add('main');
  generateText();
  generatePicture();
}
export { displayHome };