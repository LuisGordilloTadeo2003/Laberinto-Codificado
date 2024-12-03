class Population {
    constructor(count, initialX, initialY, map) {
        this.zombies = []; // Array de zombies
        this.count = count; // Cantidad de zombies
        this.initialX = initialX; // Posición inicial X
        this.initialY = initialY; // Posición inicial Y
        this.map = map; // Mapa de juego

        this.createPopulation(); // Crear los zombies al instanciar la población
    }

    // Crear la población de zombies
    createPopulation() {
        for (let i = 0; i < this.count; i++) {
            let randomPos = this.map.getRoad(); // Obtener posición inicial aleatoria
            let zombie = new Zombie(randomPos.x * 10, randomPos.y * 10, 50, 1, this.map);
            this.zombies.push(zombie);
        }
    }

    // Mover todos los zombies
    move() {
        for (let zombie of this.zombies) {
            zombie.move();
        }
    }

    // Dibujar todos los zombies
    draw() {
        for (let zombie of this.zombies) {
            zombie.draw();
        }
    }

    // Calcular movimientos necesarios para cada zombie hasta el jugador
    calculateMovementsToPlayer(player) {
        const aStar = new AStar(this.map); // Crear una instancia del algoritmo A*

        for (let zombie of this.zombies) {
            // Convertir posiciones reales (píxeles) a posiciones de celda (en el grid)
            const start = {
                x: Math.floor(zombie.x / 10), // Convertir píxeles a índice del grid
                y: Math.floor(zombie.y / 10)
            };

            const end = {
                x: Math.floor(player.x / 10),
                y: Math.floor(player.y / 10)
            };

            // Calcular el camino usando A*
            const path = aStar.findPath(start, end);

            if (path.length > 0) {
                console.log(
                    `Zombie en (${start.x}, ${start.y}) necesita ${path.length} movimientos para llegar al jugador.`
                );
            } else {
                console.log(
                    `Zombie en (${start.x}, ${start.y}) no puede llegar al jugador.`
                );
            }
        }
    }
}
