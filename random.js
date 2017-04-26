let div = document.querySelector('#wrapper');
div.addEventListener('click', () => {
	let whichSide = Math.floor(Math.random() * (5 - 1)) + 1;
	let cont = document.querySelector('.cont');
	console.log(whichSide);
	if (whichSide <= 4 && whichSide > 2) {
		console.log('less than four and greater than 2');
		cont.innerHTML = `<h2>&rarr;</h2>`;
	} else {
		console.log('less than two');
		cont.innerHTML = `<h2>&larr;</h2>`;
	};
});