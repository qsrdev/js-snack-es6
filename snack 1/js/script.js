const biciclette = [
  { nome: "Speedster 100", peso: 8.5, materiale: "plastica", abc: "def" },
  { nome: "Mountain Pro", peso: 12.3 },
  { nome: "City Rider", peso: 10.1 },
  { nome: "Trail Blazer", peso: 13.7 },
  { nome: "Road Rocket", peso: 7.9, samuele: "Parisi" },
  { nome: "Eco Bike", peso: 9.8 },
  { nome: "Gravel Master", peso: 11.4 },
  { nome: "Urban Light", peso: 9.2 },
  { nome: "Fat Tire King", peso: 15.6 },
  { nome: "Classic Cruiser", peso: 10.7 },
];

let lightBike = biciclette[0].peso;
console.log(lightBike);

for (let i = 0; i < biciclette.length; i++) {
  console.log(biciclette[i].peso);

  if (biciclette[i].peso < lightBike) {
    lightBike = biciclette[i].peso;
  }
}

console.log(`la bicicletta più leggera pesa ${lightBike} kg`);

console.time("start");

for (let i = 0; i < biciclette.length; i++) {
  // console.warn("Stiamo stampando la bicicletta numero " + (i + 1));
  for (const chiave in biciclette[i]) {
    // console.log(biciclette[i][chiave]);
  }
}

console.timeEnd("start");
