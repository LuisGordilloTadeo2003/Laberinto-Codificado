let map;
let player;
let zombiePopulation;

function setup() {
  createCanvas(700, 600);

  map = new Map(49, 69); // Crear el laberinto

  // Crear instancias
  player = new Player(1 * 10, 1 * 10, 100, 3);

  zombiePopulation = new Population(50, 250, 250, map);
}

function draw() {
  background(255);

  map.draw();

  // Dibujar y manejar al jugador
  player.handleInput();
  player.draw();

  // Dibujar y mover a los zombies
  zombiePopulation.draw();
  zombiePopulation.move();

  // Calcular los movimientos necesarios para cada zombie
  zombiePopulation.calculateMovementsToPlayer(player);
}
