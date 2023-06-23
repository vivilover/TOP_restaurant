import './style.css';
import LogoImage from './images/logo.png';

function addHeaderImage() {
  const image = document.createElement('img');
  image.src = LogoImage;
  image.alt = 'logo';
  image.classList.add('logo');

  return image;
}

function addNavBar() {
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');

  const homeListItem = document.createElement('li');
  const homeAnchor = makeAnchor('Home');
  homeListItem.appendChild(homeAnchor);
  homeListItem.setAttribute('id', 'home');

  const menuListItem = document.createElement('li');
  const menuAnchor = makeAnchor("Menu");
  menuListItem.appendChild(menuAnchor);
  menuListItem.setAttribute('id', 'menu');

  // const seasonalListItem = document.createElement('li');
  // const seasonalAnchor = makeAnchor("Seasonal");
  // seasonalListItem.appendChild(seasonalAnchor);

  const aboutUsListItem = document.createElement('li');
  const aboutUsAnchor = makeAnchor("About Us");
  aboutUsListItem.appendChild(aboutUsAnchor);
  aboutUsListItem.setAttribute('id', 'about-us');

  const searchBtnListItem = document.createElement('li');
  const searchButton = addSearchBtn();
  searchBtnListItem.appendChild(searchButton);

  ul.append(homeListItem, menuListItem, aboutUsListItem, searchBtnListItem);
  navBar.appendChild(ul);

  return navBar;
}

function makeAnchor(text) {
  const anchor = document.createElement('a');
  anchor.href = `#`;
  anchor.innerHTML = text;

  return anchor;
}


function addSearchBtn() {
  const searchBtn = document.createElement('button');
  searchBtn.classList.add('search-btn');

  const btnLogo = document.createElement('i');
  btnLogo.classList.add('fas', 'fa-search');

  searchBtn.appendChild(btnLogo);
  return searchBtn;
}

export default function makeHeader() {
  const header = document.createElement('header');

  const container = document.createElement('div');
  container.classList.add('container');

  const headerImage = addHeaderImage();
  const navBar = addNavBar();

  container.appendChild(headerImage);
  container.appendChild(navBar);

  header.appendChild(container);
  return header;
}