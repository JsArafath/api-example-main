const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayData(data))
};

const displayData = (users) => {
    for (const result of users.results) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="div">
            <h2>${result.name.title} ${result.name.first} ${result.name.last}</h2>
            <p>Email: ${result.email}</p>
            <p>${result.location.city}, ${result.location.country}</p>
        </div>
        `;

        document.getElementById('user-container').appendChild(div);
        div.classList.add('user')
    }
}

loadUser();