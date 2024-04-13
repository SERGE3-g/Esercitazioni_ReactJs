// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   const json = response.json();
//   return json;
// })
// .then(({message}) => {
//   console.log(message);
// })
// .catch((error) => {
//   console.error(error);
// });



// convertir a async await

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}

fetchData();



