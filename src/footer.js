import './style.css';

const footer = document.createElement('footer');
const name = document.createElement('div');
const git = document.createElement('div');
const linkedin = document.createElement('div');

function makeAnchor(link) {
  const anchor = document.createElement('a');
  anchor.href = link;
  anchor.target = '_blank';

  return anchor;
}

const gitAnchor = makeAnchor('https://github.com/vivilover');
const linkedinAnchor = makeAnchor('https://www.linkedin.com/in/shinhyung-lee/');

const githubIdiomaticText = document.createElement('i');
githubIdiomaticText.classList.add('fab', 'fa-github');

const linkedinIdiomaticText = document.createElement('i');
linkedinIdiomaticText.classList.add('fab', 'fa-linkedin');
gitAnchor.appendChild(githubIdiomaticText);
linkedinAnchor.appendChild(linkedinIdiomaticText);

name.innerHTML = '2023 Shin Lee, All rights reserved';
git.appendChild(gitAnchor);
linkedin.appendChild(linkedinAnchor);

footer.appendChild(name);
footer.appendChild(git);
footer.appendChild(linkedin);

export { footer };