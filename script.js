// 6 alien ships 
// attack one at a time
// You attach first if the ship survives it attacks you
// If you survive you attack the ship again, etc...
// repeat ====> next ship
//you win when you destroy all the ships

//! Player ship Props
hull = 20
firepower = 5
accuracy = 0.7
// ! Alien ships props
hull = [3, 4, 5, 6]
firepower = [2, 3, 4]
accuracy = [0.6, 0.7, 0.8]
//LOOP
// Ship Class => method: attach()
// Player Ship
// Alien Ship 

//========================================================================
class Ship{
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(enemy){
        console.log(`${this.name} is attacking ${enemy.name}`);
        if(Math.random() <= this.accuracy ){
            console.log("Hit!!!!!!!!!")
            //enemy.hull -= this.firepower
            enemy.damage(this.firepower)
            // console.log(enemy.hull)
        }else{
            console.log("Missed!!!!!!!!")
        }
    }

    damage(x){
        console.log(`${this.name}'s Hull: ${this.hull} Before the attack`)
        this.hull -= x
        if(this.hull <= 0){
           console.log(`${this.name} was destroyed! Next!`);
        } else{
            console.log(`${this.name}'s Hull: ${this.hull} After the attack`);
        }
    }
}

class Player extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
  }
}
class Alien extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; 
  }
}

const player = new Player("USS Assembly",20, 5, 0.7);

// const alien1 = new Alien("Alien1");
// const alien2 = new Alien("Alien2");
// const alien3 = new Alien("Alien3");
// const alien4 = new Alien("Alien4");
// const alien5 = new Alien("Alien5");
// const alien6 = new Alien("Alien6");

// ! creating 6 aliens and store them inside an array
const allAliens = []
for (let i = 1; i < 7; i++) {
  const alien = new Alien(`Alien${i}`);
  allAliens.push(alien);
}
console.log(allAliens)

// ! LOOP Between player and aliens
while(player.hull > 0 && allAliens[0]){ //Player alive
  for (let i = 0; i < allAliens.length; i++){
   player.attack(allAliens[i]); 
   if (allAliens[i].hull > 0){
    allAliens[i].attack(player)
  }else allAliens.shift(allAliens[i]);
}
console.log("GAME OVER!")
}



// player.attack(allAliens[1]);
// allAliens[1].attack(player);




