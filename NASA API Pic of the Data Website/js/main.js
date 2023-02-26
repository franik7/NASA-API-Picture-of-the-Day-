//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
	const choice = document.querySelector('input').value
	console.log(choice)
	const url = `https://api.nasa.gov/planetary/apod?api_key=62ZKzpGTH1yCI7mvZxDzLoN6fBELWaHUoXT5nNxx&date=${choice}`

	fetch(url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {

			console.log(data)
			if (data.media_type === "image") {
				document.querySelector('img').src = data.url
				document.querySelector('img').style.display = "block";
				document.querySelector('iframe').style.display = "none";

			} else if (data.media_type === "video") {
				document.querySelector('iframe').src = data.url
				document.querySelector('iframe').style.display = "block";
				document.querySelector('img').style.display = "none";

			}

			document.querySelector('.imageExplanation').innerText = data.explanation
			document.querySelector('.imageCopyright').innerText = "Copyright by: " + data.copyright
		})
		.catch(err => {
			console.log(`error ${err}`)
		});
}
