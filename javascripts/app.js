// Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  x : 0, 
  y : 0,
};

let travelLog = [];

/*
const order = turnRight;
console.log(`The current heading of the rover is ${rover.direction}`);


switch (order) {
  case turnLeft:
  if(rover.direction === 'N'){
    rover.direction = 'W';
  } else if (rover.direction === 'W'){
    rover.direction = 'S';
  } else if(rover.direction === 'S'){
    rover.direction = 'E';
    } else if (rover.direction === 'E'){
      rover.direction = 'N'
    };
    turnLeft();
    console.log(`The new heading of the rover is ${rover.direction}`)
    break;

  case turnRight:
  if(rover.direction === 'N'){
    rover.direction = 'E';
  } else if (rover.direction === 'E'){
    rover.direction = 'S';
  } else if(rover.direction === 'S'){
    rover.direction = 'W';
    } else if (rover.direction === 'W'){
      rover.direction = 'N'
    };
    turnRight();
     console.log(`The new heading of the rover is ${rover.direction}`)

    break; 

    */


     


// ======================
function turnLeft(){
  console.log("turnLeft was called!");

  if(rover.direction === 'N'){
    rover.direction = 'W';
  } else if (rover.direction === 'W'){
    rover.direction = 'S';
  } else if(rover.direction === 'S'){
    rover.direction = 'E';
    } else if (rover.direction === 'E'){
      rover.direction = 'N'
    };
}

function turnRight(){
  console.log("turnRight was called!");

  if(rover.direction === 'N'){
    rover.direction = 'E';
  } else if (rover.direction === 'E'){
    rover.direction = 'S';
  } else if(rover.direction === 'S'){
    rover.direction = 'W';
    } else if (rover.direction === 'W'){
      rover.direction = 'N'
    };
}

function moveForward () {
    console.log("moveForward was called");
    travelLog.push(['[x' + rover.x +',' + 'y' + rover.y + ']' ]);
    if(rover.direction === 'N' && rover.y > 0){
      rover.y--;
    } else if(rover.direction === 'W' && rover.x > 0){
      rover.x--;
    } else if(rover.direction === 'S' && rover.y < 9){
      rover.y++;
    } else if(rover.direction ==='E' && rover.x <9){
      rover.x++; 
    } else {
      console.log('Your order tried to put the rover off the grid! Order cancelled!');
    };
    
    if(grid[rover.x][rover.y] === 'O'){
      console.log('The rover found an obstacle. Order cancelled!')
      moveBackwards();
  
    } else {
    console.log(`The new position of the rover is heading ${rover.direction} row ${rover.x} column ${rover.y}`);
    }

    console.log(`The new position of the rover is heading ${rover.direction} row ${rover.x} column ${rover.y}`);
}

function moveBackwards () {
  console.log("moveBackwards was called");
  travelLog.push(['[x' + rover.x +',' + 'y' + rover.y + ']' ]);
  if(rover.direction === 'N' && rover.y < 9){
    rover.y++;
  } else if(rover.direction === 'W' && rover.x < 9){
    rover.x++;
  } else if(rover.direction === 'S' && rover.y > 0){
    rover.y--;
  } else if(rover.direction ==='E' && rover.x > 0){
    rover.x--; 
  } else {
    console.log('Your order tried to put the rover off the grid! Order cancelled!');
  }

  if(grid[rover.x][rover.y] === 'O'){
    console.log('The rover found an obstacle. Order cancelled!')
    moveForward();

  } else{
  console.log(`The new position of the rover is heading ${rover.direction} row ${rover.x} column ${rover.y}`);
  }
}
  

function getListCommands (list) {
console.log('The current position of the rover is: heading ' + rover.direction + ' ' + 'row ' + rover.x + 'column ' + rover.y);

  for(let i = 0; i < list.length; i++){
    if(list[i] === 'f'){
      moveForward();
    } else if (list[i] === 'b'){
      moveBackwards();
    } else if (list[i] === 'r'){
      turnRight();
    } else if (list[i] === 'l'){
      turnLeft(); 
    } else {
      console.log('There was a problem!Your order could not be fulfilled')
    }
  }
  travelLog.push(['[x' + rover.x +',' + 'y' + rover.y + ']' ]);
  console.log('The final position of the rover is: heading ' + rover.direction + ' ' + 'row ' + rover.x + ' column ' + rover.y);
  console.log('The route taken by your rover was' + travelLog);
  

}



let grid = [

[null, 'O', null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],

]






