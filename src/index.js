import './style.css';
import makeHeader from './header';
import { footer } from './footer';
import { main } from './main-content';
import { displayMenu } from './menu';
import { displayHome } from './home';
import { displayContact } from './about-us';

const content = document.getElementById('content');
const header = makeHeader();
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer); // adding sticky footer

const menu = document.getElementById('menu');
const home = document.getElementById('home');
const aboutUs = document.getElementById('about-us');

menu.addEventListener('click', displayMenu);
home.addEventListener('click', displayHome);
aboutUs.addEventListener('click', displayContact);





