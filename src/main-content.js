import './style.css';
import Pasta from './images/pasta.jpeg';

const main = document.createElement('main');
// const dummy = document.createElement('div');
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

const foodpic = document.createElement('div');
foodpic.setAttribute('id', 'food-picture');

const pic = document.createElement('img');
pic.src = Pasta;
pic.alt = 'pasta';
pic.classList.add('pasta');

foodpic.appendChild(pic);

main.append(description, foodpic);
// main.append(dummy);

export { main };

