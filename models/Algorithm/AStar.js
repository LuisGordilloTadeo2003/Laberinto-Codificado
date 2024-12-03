class AStar {
    constructor(map) {
        this.map = map;
    }

    // Calcula la distancia heurística (Manhattan)
    heuristic(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }

    // Encuentra el camino desde start hasta end usando A*
    findPath(start, end) {
        // Asegúrate de que las celdas de inicio y fin sean válidas
        if (!this.map.isRoad(start.x, start.y) || !this.map.isRoad(end.x, end.y)) {
            console.log("Posición inválida para A*");
            return [];
        }

        const openSet = []; // Celdas a evaluar
        const cameFrom = new Map(); // Para reconstruir el camino
        const gScore = new Map(); // Coste desde el inicio
        const fScore = new Map(); // Coste estimado total

        const startKey = `${start.x},${start.y}`;
        const endKey = `${end.x},${end.y}`;

        // Inicializar
        openSet.push(start);
        gScore.set(startKey, 0);
        fScore.set(startKey, this.heuristic(start, end));

        while (openSet.length > 0) {
            // Ordenar el conjunto abierto por fScore y obtener el nodo con menor coste
            openSet.sort((a, b) => fScore.get(`${a.x},${a.y}`) - fScore.get(`${b.x},${b.y}`));
            const current = openSet.shift();
            const currentKey = `${current.x},${current.y}`;

            // Si llegamos al objetivo
            if (current.x === end.x && current.y === end.y) {
                return this.reconstructPath(cameFrom, current);
            }

            // Explorar vecinos
            for (let [dx, dy] of this.map.DIRECCIONES) {
                const neighborX = current.x + dx;
                const neighborY = current.y + dy;

                if (!this.map.isRoad(neighborX, neighborY)) continue;

                const neighborKey = `${neighborX},${neighborY}`;
                const tentativeGScore = (gScore.get(currentKey) || Infinity) + 1;

                if (tentativeGScore < (gScore.get(neighborKey) || Infinity)) {
                    cameFrom.set(neighborKey, current);
                    gScore.set(neighborKey, tentativeGScore);
                    fScore.set(neighborKey, tentativeGScore + this.heuristic({ x: neighborX, y: neighborY }, end));

                    if (!openSet.some(n => n.x === neighborX && n.y === neighborY)) {
                        openSet.push({ x: neighborX, y: neighborY });
                    }
                }
            }
        }

        // No se encontró camino
        return [];
    }

    // Reconstruye el camino desde el objetivo hasta el inicio
    reconstructPath(cameFrom, current) {
        const path = [current];
        let currentKey = `${current.x},${current.y}`;

        while (cameFrom.has(currentKey)) {
            const nextNode = cameFrom.get(currentKey);
            path.unshift(nextNode);
            currentKey = `${nextNode.x},${nextNode.y}`;
        }

        return path;
    }
}
