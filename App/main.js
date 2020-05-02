import { getRepos, getFavs } from './index.js';
const reposButton = document.getElementById('repos');
reposButton.addEventListener('click', function() {
	const url_Rep = `https://api.github.com/users/feridunAKYOL/repos`;
	getRepos(url_Rep);
});

const favsButton = document.getElementById('favRepos');
favsButton.addEventListener('click', function() {
	const url_fav = `https://api.github.com/users/feridunAKYOL/repos`;
	getFavs(url_fav);
});
