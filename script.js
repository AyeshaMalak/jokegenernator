function generateJoke() {
    const jokeTextContainer = document.getElementById('jokeText');

    // Fetch programming joke from JokeAPI
    fetch('https://v2.jokeapi.dev/joke/Programming')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            return response.json();
        })
        .then((data) => {
            // Handle different types of jokes
            if (data.type === 'single') {
                jokeTextContainer.innerHTML = `<p>${data.joke}</p>`;
            } else if (data.type === 'twopart') {
                jokeTextContainer.innerHTML = `<p>${data.setup}</p><p><strong>${data.delivery}</strong></p>`;
            }
        })
        .catch((error) => {
            jokeTextContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}
