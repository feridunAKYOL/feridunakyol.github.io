import { render } from './render.js';

export async function getRepos(url) {
	const response = await fetch(url);
	const result = await response.json();
	const view = render(result);
	const output = document.getElementById('result');
	output.appendChild(view);
}

export async function getFavs(url) {
	const response = await fetch(url);
	const result = await response.json();
	const view = render(result);
	const output = document.getElementById('favorite-repos');
	output.appendChild(view);
}
