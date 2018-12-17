



class Boy {
    constructor(grid, col, row) {

        // TODO: save grid, col, and row as instance variables on this object
        // TODO: call loadImage('') and save that as a this.img variable
        this.grid=grid;
        this.col=col;
        this.row=row;
        this.direction = DIRECTION.RIGHT;

       this.img = loadImage('assets/Hanzo0.png');
    }

    draw() {
        // TODO: tell the grid to draw an image onto the grid.  
        //       Give it the image, column, row, and direction 
        //       to draw the image. Take a look at grid.js to find & 
        //      try to understand this function
       grid.drawImageOnGrid(this.img,this.col,this.row,this.direction);
    }

    //conditions so that player cannot move pass barriers
    nearBarrierRight(){
        for(i = barrierObject.length -1; i >=0; i--){
            var barrier = barrierObject[i];
            if (boy.col == barrier.col -1 && boy.row == barrier.row){
                return true;
            }
        }
        return false;
    }

    nearBarrierLeft(){
        for(i = barrierObject.length -1; i >=0; i--){
        var barrier = barrierObject[i];
            if (boy.col == barrier.col +1 && boy.row == barrier.row){
                return true;
            }
        }
    return false;
    }

    nearBarrierUp(){
        for(i = barrierObject.length -1; i >=0; i--){
            var barrier = barrierObject[i];
            if (boy.col == barrier.col  && boy.row == barrier.row + 1){
                return true;
            }
        }
        return false;
    }

    nearBarrierDown(){
        for(i = barrierObject.length -1; i >=0; i--){
            var barrier = barrierObject[i];
            if (boy.col == barrier.col  && boy.row == barrier.row - 1 ){
                return true;
            }
        }
        return false;
    }

    //condition if player touch the enemies
    touchGenji(){
        for(i = enemies.length -1 ; i >= 0; i --){
            var genji=enemies[i];
            if (  abs(boy.col -genji.col ) <= 0.3 && abs(boy.row - genji.row) <=0.3 ){
                return true;
            }
        }
        return false;
    }
    touchGenjiMoving(){
        for(i = enemiesMove.length -1 ; i >= 0; i --){
            var genjiMove=enemiesMove[i];
            if (  abs(boy.col -genjiMove.col ) <= 0.3 && abs(boy.row - genjiMove.row) <=0.3 ){
                return true;
            }
        }
        return false;
    }

       
      
    //moving the player
    moveRight() {
        // TODO: move your character to the right by one column (but don't let it leave the screen)
        // Also, set the direction as DIRECTION.RIGHT so that the image get's draw at the correct rotation
        if(this.col< grid.cols - 1 ){
            this.col+= 1;
            this.direction= DIRECTION.RIGHT;
        }
    }
    moveLeft() {
        // TODO: move your character to the left one column (but don't let it leave the screen)
        // Also, set the direction appropiately
        if( this.col>0){
            this.col-= 1;
            this.direction= DIRECTION.LEFT;
        }
    }
    moveUp() {
        // TODO: move your character up by one row (but don't let it leave the screen)
        // Also, set the direction appropiately
        if( this.row>0){
            this.row -= 1;
            this.direction= DIRECTION.UP;
        }
    }
    moveDown() {
        // TODO: move your character down by one row (but don't let it leave the screen)
        // Also, set the direction appropiately
        if( this.row< grid.rows - 1){
            this.row += 1;
            this.direction= DIRECTION.DOWN;
        }
    }
}