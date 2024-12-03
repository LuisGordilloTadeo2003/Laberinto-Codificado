class Map {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = [];

        this.TAM_CELDA = 10; // Tamaño de cada celda del laberinto
        this.DIRECCIONES = [
            [-1, 0], // Arriba
            [1, 0],  // Abajo
            [0, -1], // Izquierda
            [0, 1]   // Derecha
        ];

        this.generateMap(); // Generar el mapa al crear la instancia
    }

    // Verificar si una celda es un camino (Road)
    isRoad(x, y) {
        if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
            return this.grid[y][x] instanceof Road;
        }
        return false;
    }

    // Inicializar el mapa con muros
    initialize() {
        this.grid = [];
        for (let y = 0; y < this.rows; y++) {
            let row = [];
            for (let x = 0; x < this.cols; x++) {
                row.push(new Wall(x, y, 10, "Wall")); // Poner todo como muro inicialmente
            }
            this.grid.push(row);
        }
    }

    // Dibujar el mapa en el lienzo
    draw() {
        for (let row of this.grid) {
            for (let cell of row) {
                cell.draw(); // Dibujar cada celda
            }
        }
    }

    getRoad() {
        let roads = [];

        for (let row of this.grid) {
            for (let cell of row) {
                if (cell.type == "Road") {
                    roads.push(cell);
                }
            }
        }

        if (roads.length > 0) {
            let randomRoad = floor(random(roads.length));
            return roads[randomRoad];
        } else {
            console.log("No hay caminos disponibles.");
            return null; // Retornar null si no hay caminos
        }
    }

    // Función de backtracking para generar el laberinto
    backtracking(x, y) {
        this.grid[y][x] = new Road(x, y, 10, "Road"); // Marca la celda actual como camino

        // Barajar direcciones aleatorias
        let direccionesAleatorias = [...this.DIRECCIONES];
        direccionesAleatorias.sort(() => Math.random() - 0.5);

        // Intentar moverse en cada dirección
        for (let [dx, dy] of direccionesAleatorias) {
            let nx = x + dx * 2; // Dos celdas de distancia
            let ny = y + dy * 2;

            if (this.isValid(nx, ny)) {
                // Romper la pared entre las celdas adyacentes
                this.grid[y + dy][x + dx] = new Road(x + dx, y + dy, 10, "Road"); // Esta es la pared que rompemos

                // Recursión para seguir cavando el laberinto
                this.backtracking(nx, ny);
            }
        }
    }

    // Verificar si la celda es válida
    isValid(x, y) {
        return x >= 0 && x < this.cols - 1 && y >= 0 && y < this.rows - 1 && this.grid[y][x] instanceof Wall;
    }

    // Función para generar el laberinto
    generateMap() {
        this.initialize(); // Inicializa el mapa con muros
        let startX = 1; // Punto de inicio
        let startY = 1;
        this.grid[startY][startX] = new Road(startX, startY, 10, "Road"); // Marca el punto de inicio como camino

        this.backtracking(startX, startY); // Genera el laberinto con backtracking
        this.draw(); // Dibuja el mapa
    }
}
