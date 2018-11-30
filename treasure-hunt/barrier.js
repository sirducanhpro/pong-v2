class Barrier{
    constructor(grid,col,row){
        this.grid=grid;
        this.col=col;
        this.row=row;
    }

    draw(){
        rectMode(CENTER);
        fill(0,0,0);
        rect(this.grid.cellCenterX(this.col),
             this.grid.cellCenterY(this.row),
             this.grid.cellWidth,
             this.grid.cellHeight);

    }
}
