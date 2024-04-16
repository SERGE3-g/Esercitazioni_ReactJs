// Date: 2024/04/16
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                output.appendChild(div);
            });
        });
});


// async await
btn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        data.forEach(post => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            output.appendChild(div);
        });
    } catch (error) {
        console.log(error);
    }
}
);


