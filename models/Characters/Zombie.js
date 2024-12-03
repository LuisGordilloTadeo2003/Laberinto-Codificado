class Zombie extends Character {
    constructor(x, y, health, speed, map) {
        super(x, y, health, speed, map);
        this.color = color(255, 0, 0); // Rojo
        this.lastMoveTime = 0; // Inicializamos lastMoveTime
    }

    // Dibujar al zombie
    draw() {
        fill(this.color);
        ellipse(this.x + 5, this.y + 5, 7);
    }

    // Movimiento del Zombie
    move() {
        // Direcciones posibles: [x, y] (arriba, abajo, izquierda, derecha)
        const directions = [
            [0, -1], // Arriba
            [0, 1],  // Abajo
            [-1, 0], // Izquierda
            [1, 0]   // Derecha
        ];

        // Escoger una dirección aleatoria
        const [dx, dy] = random(directions);

        // Nueva posición en celdas del mapa
        const newX = Math.floor(this.x / this.map.TAM_CELDA) + dx;
        const newY = Math.floor(this.y / this.map.TAM_CELDA) + dy;

        // Comprobar si la nueva celda es un camino (Road)
        if (this.map.isRoad(newX, newY)) {
            // Actualizar posición en píxeles
            this.x = newX * this.map.TAM_CELDA;
            this.y = newY * this.map.TAM_CELDA;
        }

        this.map.grid[this.y / 10][this.x / 10] = new Road(this.x, this.y, 10, "Road");
    }

    // Atacar al jugador
    attack(target) {
        console.log("El zombie muerde al jugador.");
        target.takeDamage(5);
    }

    findPathToPlayer(player) {
        const start = {
            x: Math.floor(this.x / this.map.TAM_CELDA),
            y: Math.floor(this.y / this.map.TAM_CELDA)
        };

        const end = {
            x: Math.floor(player.x / this.map.TAM_CELDA),
            y: Math.floor(player.y / this.map.TAM_CELDA)
        };

        const aStar = new AStar(this.map);
        const path = aStar.findPath(start, end);

        console.log("Camino calculado:", path);
        return path;
    }
}
