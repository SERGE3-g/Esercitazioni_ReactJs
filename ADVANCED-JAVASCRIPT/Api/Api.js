import { setImageToDom } from "./setImage.js";
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

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    const json = response.json();
    return json;
  })
  .then(({ message }) => {
    console.log(message);
    setImageToDom(message);
  })
  .catch((error) => {
    console.log("la risorsa ha un errore", error);
  });



// convertir a async await

// async function fetchData() {
//   try {
//     const response = await fetch("https://dog.ceo/api/b/image/random");
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();


async function getTheDog() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const { message } = await response.json();
      setImageToDom(message);
    } catch (error) {
      console.log(error);    
    }
  }
  
  getTheDog();



