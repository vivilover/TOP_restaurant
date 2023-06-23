import './style.css';
import Interior from './images/interior.jpeg';

function loadContact() {
  const main = document.querySelector('main');

  const picContainer = document.createElement('div');
  picContainer.classList.add('contact-pic-container');

  const pic = document.createElement('img');
  pic.src = Interior;
  picContainer.append(pic);
  pic.classList.add('contact-pic');

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const contactHeader = document.createElement('p');
  contactHeader.classList.add('contact-header');
  const contactDesc = document.createElement('p');
  const address = document.createElement('p');
  const inquiry = document.createElement('p');
  const joinTeam = document.createElement('p');
  const followLink = document.createElement('p');

  contactHeader.textContent = 'Contact';
  contactDesc.textContent = `Zobip's is a relaxed Italian cuisine in the heart of Watsonville. We're open \
  seven days a week until late, and we serve our full menu in the dining room and bar. We appreciate your \
  inquiry, and someone from our team will respond shortly.`;
  address.textContent = '123 Hudson Street New York, NY 12345'
  inquiry.textContent = `General Inquiries: info@zobip.com`;
  joinTeam.textContent = `Join Our Team: teams@zobip.com`;
  followLink.textContent = `Follow @zobipwatsonville`;
  contactContainer.append(contactHeader, contactDesc, address, inquiry, joinTeam, followLink);

  main.append(picContainer, contactContainer);
}

function displayContact() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.style.padding = '0';
  main.style.marginTop = '0';
  main.style.marginBottom = '0';
  main.style.background = 'white';
  main.style.fontFamily = 'Montserrat, sans-serif';
  main.classList.remove('main');
  loadContact();
}


export { displayContact };