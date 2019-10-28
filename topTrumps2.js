
let pokemonTrumps = [

    {name:"Pikachu", attack: 25},
    {name:"Charizard", attack:48},

    {name:"Blastoise", attack: 45},
    {name:"Rychu", attack:38},

    {name:"Arbok", attack: 27},
    {name:"Mew", attack:100},

    {name:"Onyx", attack: 45},
    {name:"Gyarados", attack:40},

    {name:"Psyduck", attack: 33},
    {name:"Hitmonchan", attack:44},

    {name:"Hitmonlee", attack: 44},
    {name:"Jolteon", attack:48},

    {name:"Flareon", attack: 48},
    {name:"Vaporeon", attack:48},

    {name:"Magicarp", attack: 20},
    {name:"Voltorb", attack: 22},

    {name:"Snorlax", attack: 28},
    {name:"Clafairy", attack: 22},

    {name:"Metapod", attack: 15},
    {name:"Beedrill", attack:25},

    {name:"Golem", attack: 38},
    {name:"Rapidash", attack:47},

    {name:"Moltress", attack: 20},
    {name:"Ryhorn", attack:50},

    {name:"Rhydon", attack: 55},
    {name:"Alakazam", attack:20},

    {name:"Machamp",attack: 55},
    {name:"Poliwrath",attack:48},

    {name:"Pikachu",attack: 25},
    {name:"Charizard",attack:48},

]

// fischer rayes shuffle
let i = pokemonTrumps.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = pokemonTrumps[j];
        pokemonTrumps[j] = pokemonTrumps[i];
        pokemonTrumps[i] = temp;     
}


//shuffled decks
let deck1 = pokemonTrumps.splice(0,14);
let deck2 = pokemonTrumps.splice(0,14);
// console.log(deck1)
// console.log('----------------------')
// console.log(deck2);

play1 = deck1[0];
play2 = deck2[0];

// console.log(play1);
// console.log(play2);

const roundOne = () => {
    if (play1.attack < play2.attack) {
        console.log("Player Two Wins this round!") 
        deck2.push(deck1[0])
        console.log(deck2);
        console.log("--------");        
        console.log(deck1);
        deck1.splice(0,1);

        //console.log(deck1);
      
    }
    
    else if (play1.attack > play2.attack) {
        console.log("Player One Wins This Round!")}
}

roundOne()


















