const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const div = document.createElement('div');
            div.innerHTML = `
                            <h3>${user.name}</h3>
                            <p>${user.email}</p>
                            <p>${user.phone}</p>
                        `;
            output.appendChild(div);
        });
    });
