class Wall extends Obstacle {
    constructor(x, y, tam_celda, type) {
        super(x, y, tam_celda, type);
    }

    // Dibujar la pared
    draw() {
        fill(0, 100, 0);  // Muro negro
        noStroke();
        rect(this.x * this.tam_celda, this.y * this.tam_celda, this.tam_celda);
    }
}