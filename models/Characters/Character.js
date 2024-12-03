class Character {
    constructor(x, y, health, speed, map) {
        this.x = x;               // Posición X
        this.y = y;               // Posición Y
        this.health = health;     // Salud
        this.speed = speed;       // Velocidad
        this.map = map;           // Mapa
    }

    // Dibujar el personaje
    draw() {
        fill(255); // Blanco por defecto
        ellipse(this.x, this.y, 7); // Representación básica como un círculo
    }

    // Mover al personaje
    move(directionX, directionY) {
        this.x += directionX * this.speed;
        this.y += directionY * this.speed;
    }

    // Recibir daño
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            console.log("Personaje derrotado.");
            this.health = 0; // Evitar valores negativos
        }
    }
}