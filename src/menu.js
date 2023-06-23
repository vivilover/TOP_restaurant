import './style.css';
import MenuImg from './images/menu.jpeg';
// menu to use below: total 11 of them
import SquidInkPasta from './images/pasta.jpeg';
import ArugulaPizza from './images/arugula-pizza.jpeg';
import HawaiianPizza from './images/hawaiian-pizza.jpeg';
import Gnocchi from './images/gnocchi.jpeg';
import Lasagna from './images/lasagna.jpeg';
import MeatballSpaghetti from './images/meatball-spaghetti.jpeg';
import Ragu from './images/ragu.jpeg';
import TomatoPasta from './images/tomato-pasta.jpeg';
import MozzarellaSalad from './images/mozzarella-salad.jpeg';
import Tiramisu from './images/tiramisu.jpeg';
import PannaCotta from './images/panna-cotta.jpeg';

const menu = document.getElementById('menu');
const main = document.querySelector('main');

function loadMenuText() {
  const main = document.querySelector('main');
  main.classList.add('main');
  const container = document.createElement('div'); // to put text on image
  // const menuImage = document.createElement('img');
  const text = document.createElement('div');

  container.classList.add('menu-page-top-container');
  // menuImage.src = MenuImg; // adding image source
  // menuImage.classList.add('menu-image');

  text.classList.add('menu-image-text', "centered"); // add class on text ON image
  text.innerHTML = 'MENU';

  // container.append(menuImage, text); // add image AND text on container
  container.append(text);
  main.append(container);
}

// menu list container
function createMenuContainer() {
  const main = document.querySelector('main');
  const menuListContainer = document.createElement('div');
  menuListContainer.classList.add('menulist-container');

  main.append(menuListContainer);
}

// template function to make menu
function createMenuItem(name, price, desc, imageSrc) {
  // const dot = '\u{00B7}';
  // console.log(dot);
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodImage = document.createElement('img');
  foodImage.src = imageSrc;
  foodImage.alt = `${name}`;
  foodImage.classList.add('menu-photo');

  const detailContainer = document.createElement('div');
  detailContainer.classList.add('menu-detail-container');

  const dishName = document.createElement('h2');
  dishName.textContent = name;
  dishName.classList.add('menu-name');

  const dishPrice = document.createElement('p');
  dishPrice.textContent = `$${price}`;
  dishPrice.classList.add('menu-price', 'menu-font');
  // dishPrice.after(dot);

  const description = document.createElement('p');
  description.textContent = desc;
  description.classList.add('menu-description', 'menu-font');
  detailContainer.append(dishName, dishPrice, description);

  menuItem.append(foodImage, detailContainer);
  return menuItem;
}

function addMenuItems() {
  const menuBody = document.querySelector('.menulist-container');
  menuBody.appendChild(
    createMenuItem('arugula-pizza', '19', 'Fresh arugula will entertain you \
    while parmesan cheese melts on your tongue.', `../src/images/arugula-pizza.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('squid ink pasta', '27', 'Assorted seafood cooked with marinara sauce \
    , and vibrant squid ink pasta.', `../src/images/pasta.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('hawaiian-pizza', '25', 'Talking about hawaiian pizza in \
    Italian cuisine? Sweet balance of juicy pineapple and well-seasoned sausage.',
    `../src/images/hawaiian-pizza.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('gnocchi', '18', 'Potato at its perfection. Chef recommended.',
    `../src/images/gnocchi.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('lasagna', '24', 'Recipe handed down by our first owner and chef. \
    Guaranteed refund if not satisfied.', `../src/images/lasagna.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('meatball spaghetti', '23', 'Handmade meatballs and house-special \
    tomato sauce for a luxurious experience.', `../src/images/meatball-spaghetti.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('ragu', '23.7', 'Tomato, salary, carrots, and meat will dance\
    in your mouth. Al dante pasta.', `../src/images/ragu.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('tomato pasta', '17', 'Housemade tomato sauce on top of fresh basil \
    and pasta. Basic but impeccable.', `../src/images/tomato-pasta.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('mozzarella salad', '21', 'We grow a few cows, and the mozs are \
    from them. Fresh garden veggies.', `../src/images/mozzarella-salad.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('tiramisu', '7.5', 'Coffee and sweet. Layers of joy.',
    `../src/images/tiramisu.jpeg`)
  );
  menuBody.appendChild(
    createMenuItem('panna cotta', '9', 'You will love this house special panna cotta we take \
    pride in.', `../src/images/panna-cotta.jpeg`)
  );
}

function displayMenu() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.style.padding = '0'; // resetting main padding: 0
  console.log(main);
  main.style.background = 'white';
  main.style.fontFamily = 'Montserrat, sans-serif';
  main.style.marginTop = '40px';

  loadMenuText();
  createMenuContainer();
  addMenuItems();
}

export { displayMenu };