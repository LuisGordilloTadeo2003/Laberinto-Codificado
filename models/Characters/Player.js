class Player extends Character {
    constructor(x, y, health, speed) {
        super(x, y, health, speed);
        this.color = color(0, 255, 0); // Verde
    }

    // Dibujar al jugador
    draw() {
        fill(this.color);
        ellipse(this.x + 5, this.y + 5, 7);
    }

    // Controlar movimiento con teclado
    handleInput() {
        let dirX = 0;
        let dirY = 0;

        if (keyIsDown(LEFT_ARROW)) dirX = -1;
        if (keyIsDown(RIGHT_ARROW)) dirX = 1;
        if (keyIsDown(UP_ARROW)) dirY = -1;
        if (keyIsDown(DOWN_ARROW)) dirY = 1;

        this.move(dirX, dirY);
    }

    // Atacar
    attack(target) {
        console.log("El jugador ataca al zombie.");
        target.takeDamage(10);
    }
}