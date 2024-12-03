class Road extends Obstacle {
    constructor(x, y, tam_celda, type) {
        super(x, y, tam_celda, type);
    }

    // Dibujar el camino
    draw() {
        fill(255);  // Camino blanco
        noStroke();
        rect(this.x * this.tam_celda, this.y * this.tam_celda, this.tam_celda);
    }
}