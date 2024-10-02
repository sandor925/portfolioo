// RandomUser API hívás
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userProfile = `
                <img src="${user.picture.large}" alt="Profile Picture">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>Email: ${user.email}</p>
                <p>Ország: ${user.location.country}</p>
            `;
            document.getElementById('user-profile').innerHTML = userProfile;
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Kapcsolat űrlap kezelése (basic)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Köszönjük az üzeneted!');
        // Itt lehet AJAX kérést küldeni szerver felé, ha szükséges
        this.reset();
    } else {
        alert('Kérlek, töltsd ki az összes mezőt!');
    }
});