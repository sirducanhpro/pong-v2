//the enemies that will search for the player
class Genji{
    constructor(grid,col,row){
        this.grid=grid;
        this.col=col;
        this.row=row;

        this.img= loadImage('assets/genji.png');
    }

    draw(){

        grid.drawImageOnGrid(this.img,this.col,this.row,this.direction);
    }


}


