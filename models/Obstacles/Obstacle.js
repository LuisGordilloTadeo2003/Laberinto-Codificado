class Obstacle {
    constructor(x, y, tam_celda, type) {
        this.x = x;
        this.y = y;
        this.tam_celda = tam_celda
        this.type = type;
    }

    // Método para dibujar el obstáculo
    draw() {
        // Será implementado por los hijos
    }
}