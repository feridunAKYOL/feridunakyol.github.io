function render(result) {
	console.log('render is working');
	const ul = document.createElement('ul');
	for (let element of result) {
		const a = document.createElement('a');
		a.href = element.html_url;
		a.textContent = element.full_name;

		const li = document.createElement('li');
		li.appendChild(a);

		ul.appendChild(li);
	}
	return ul;
}
export { render };
// const result = document.getElementById('result');
// result.appendChild(ul);
