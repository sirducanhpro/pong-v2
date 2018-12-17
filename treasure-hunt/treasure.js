class Treasure {
    constructor(grid, col, row) {

        // TODO: save grid, col, and row as instance variables on this object
        // TODO: call loadImage('') and save that as a this.img variable
        this.grid=grid;
        this.col=col;
        this.row=row;
        this.direction = DIRECTION.RIGHT;

       this.img = loadImage('assets/treasure.png');
    }

    draw() {
        // TODO: tell the grid to draw an image onto the grid.  
        //       Give it the image, column, row, and direction 
        //       to draw the image. Take a look at grid.js to find & 
        //      try to understand this function
       grid.drawImageOnGrid(this.img,this.col,this.row,this.direction);
    }

};