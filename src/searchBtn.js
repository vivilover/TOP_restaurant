

export function makeSearchBtn() {
  const content = document.getElementById('content');

  const searchBtn = document.createElement('button');
  searchBtn.classList.add('search-btn');

  const btnLogo = document.createElement('i');
  btnLogo.classList.add('fas', 'fa-search');

  searchBtn.appendChild(btnLogo);

  content.appendChild(searchBtn);
}