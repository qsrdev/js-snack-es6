const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
];

// console.log(squadre);

const newSquadre = [];

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = getRandom(5);
  squadre[i].falliSubiti = getRandom(10);
  newSquadre.push(squadre[i]);
}

for (let i = 0; i < newSquadre.length; i++) {
  delete newSquadre[i].puntiFatti;
}

console.log(newSquadre);

function getRandom(max) {
  return Math.floor(Math.random() * max + 1);
}
