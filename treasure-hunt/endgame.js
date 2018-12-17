class End{
    constructor(){

    }
    // make a gameover display
    display(){
        background(100,25,0)
        fill(0,255,255);
        textSize(20)
        text("You have lost the game", 84,100);
        text("Total treasure collected: " + treasureCollected, 68, 150)
        text("To restart, Press Z",120,200)

    }
}