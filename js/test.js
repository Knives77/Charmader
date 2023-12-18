function EnvironmentStatus(
  nameStatus = "Normal",
  description = "Estado normal.",
  conditionPokemon = "nada"
) {
  this.nameStatus = nameStatus;
  this.descriptionStatus = description;
  this.conditionPokemon = conditionPokemon;
}

EnvironmentStatus.prototype.condition = function () {
  console.log(`El Pokemón está en el entorno: "${this.nameStatus}". Donde: ${this.descriptionStatus}. Entoces: ${this.conditionPokemon}`);
};
// const test = new EnvironmentStatus();
// console.log("Test: ", test);
// test.condition();

const drizzle = new EnvironmentStatus(
  "Lluvia",
  "Llueve",
  "Los ataques de tipo agua se fortalecen"
);


const storm = new EnvironmentStatus(
  "Tormenta",
  "Se invoca a una tormenta",
  "Recibe daño al final de cada turno si nos es de tipo tierra o roca"
);

function Pokemon(name, hp, atack, nameStatus, descriptionStatus, conditionPokemon,...type) {
  this.super = EnvironmentStatus;
  this.name = name;
  this.type = type;
  this.hp = hp;
  this.atack = atack;
  this.nameStatus = nameStatus;
  this.descriptionStatus = descriptionStatus;
  this.conditionPokemon = conditionPokemon;
}
//Heredando de Status
Pokemon.prototype = new EnvironmentStatus();
Pokemon.prototype.constructor = Pokemon;
//Crear prototipo
Pokemon.prototype.atack = function () {
  console.log("*Ataca*");
};
Pokemon.prototype.escape = function () {
  console.log("*Escapa*");
};
// Pokemon.prototype.condition = function () {
//     console.log(`El pokemon obtiene : ${this.conditionPokemon} en el estado de entorno : ${this.nameStatus}`);
// }
// const vaporeon = new Pokemon("Vaporeon", 240, "Agua");
const charizard = new Pokemon(
  "Charizard",
  330,
  210,
  storm.nameStatus,
  storm.descriptionStatus,
  storm.conditionPokemon,
  "Fuego",
  "Volador"
);
// console.log(vaporeon);
console.log("Charizard: ", charizard);
// console.log(Object.getPrototypeOf(charizard));
console.log("Llovizna: ", drizzle);
console.log("Tormenta: ", storm);
// console.log(Object.getPrototypeOf(llovizna));
// vaporeon.atack();
charizard.condition();
