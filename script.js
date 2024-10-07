// RandomUser API hívás
document.addEventListener('DOMContentLoaded', function () {
    // API adatokat máshol használjuk (pl. random user szekció)
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const randomUserProfile = `
                <img src="${user.picture.large}" alt="Random Profile Picture" class="random-profile-image">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>Email: ${user.email}</p>
                <p>Ország: ${user.location.country}</p>
            `;
            document.getElementById('random-user-profile').innerHTML = randomUserProfile;
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Kapcsolat űrlap kezelése
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Köszönjük az üzeneted!');
        // AJAX kérést ide lehet tenni, ha szükséges szerver felé
        this.reset();
    } else {
        alert('Kérlek, töltsd ki az összes mezőt!');
    }
});
