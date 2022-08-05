
//     #######################################
//     #                                     #
//     #             The Classes             #
//     #                                     #
//     #######################################

// ========================================================================================================

// Main class for all fish
// Two subclasses, extended from main fish, for saltwater + freshwater fish

// ========================================================================================================

export class Fish {
    constructor(name,image){
        this.name = name; // the name when we make a new fish object
        this.health = 100; // the health of the fish is 100 - the most healthy. Our actions will reduce this
        this.hunger = 0; // the fish is not hungry at 0, and most hungry at 10
        this.stress = 0; // the fish is not stressed at 0, and most stressed at 10
        this.clean = 100
        this.image = image
    }

    // decline(){
    //     setInterval(this.health -=2, 1000)
    // }

    feeding() {
        this.health += 10
        this.hunger -=2
        this.clean -=10
        console.log (`You fed ${this.name}. He is now ${this.hunger}/10 hungry. He made a bit of a mess, though. His tank is ${this.clean} clean%`)
        return this;
    }

    cleaning() {
        this.health +=20
        this.stress /=2
        this.hunger +=4
        this.clean +=10
        console.log (`You cleaned ${this.name}'s tank. He is healthier, his tank is ${this.clean}% clean, and is only ${this.stress}/10 stressed! `)
    }

    watching(){
        this.stress *=2
        this.clean -=30
        console.log(`You watch ${this.name} swim about peacefully for a long time. You leave his tank light on for much longer than it should be! Algae has grown, and ${this.name} did not feel safe in the light! His tank is ${this.clean}% clean, and is now ${this.stress}/10 stressed!`)
    }
}

export class Saltwater extends Fish {
    constructor(name,salt) {
        super (name, salt)
        this.salt=100
    }

    addSalt() {
        this.health +=10
        console.log('you added salt')
    }
}