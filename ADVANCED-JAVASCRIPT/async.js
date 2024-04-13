const laptops = [
  { brand: 'Apple', ram: 16, ssd: 512 },
  {brand:'Hp', ram: 8, ssd: 256},
  {brand:'Acer', ram: 4, ssd: 128},
  {brand:'Lenovo', ram: 8, ssd: 256},
  {brand:'Asus', ram: 16, ssd: 512},
  {brand:'Dell', ram: 8, ssd: 256},
  {brand:'Apple', ram: 16, ssd: 512},

];

function showLaptops() { 
    setTimeout(() => {
        laptops.forEach(pc) => console.log(pc); 
      }
      , 500);
}

function insertNewLaptop(laptop) {
  setTimeout(() => {
    laptops.push(laptop);
    Callback();
  }, 1000);
}

insertNewLaptop({ brand: 'Samsung', ram: 16, ssd: 512 }, showLaptops);



