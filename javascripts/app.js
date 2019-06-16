// Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  x : 0, 
  y : 0,
};

let travelLog = [];

const rover2 = {
  direction: 'N',
  x : 5, 
  y : 7,
};


const obstacles = {
  x: [0,1,2,2,4,6,7],
  y: [6,0,2,7,4,3,8],

};


console.log('Welcome to the Mars Rover Simulator'); 
console.log('To control the rover you can either give individual commands or establish a travel plan');
console.log('The commands are the following: moveForward(), moveBackwards(), turnLeft() and turnRight');
console.log('The flight plan can be determined by using the getListCommands(), with the set of movements between the parentheses (you only have to use the words assigned for each command to invoke it: f --> moveForward; b --> moveBackwards; l --> turnLeft; r --> turnRight) within a set of brackets, as in ---> getListCommands("ffrrbl")');
console.log('The initial position of your rover is x:0, y:0. The location of the obstacles are yet to be determined upon your adventure!'); 

     

// TURNLEFT FUNCTION

function turnLeft(){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case 'N' : 
    rover.direction = 'W'; 
    break; 
    case 'W' : 
    rover.direction = 'S'; 
    break; 
    case 'S' : 
    rover.direction = 'E'; 
    break; 
    case 'E' : 
    rover.direction = 'N'; 
    break; 
  }
};

// TURN RIGHT FUNCTION 

function turnRight(){
  console.log("turnRight was called!");

  switch (rover.direction) {
    case 'N' : 
    rover.direction = 'E'; 
    break;
    case 'E' : 
    rover.direction = 'S'; 
    break; 
    case 'S' : 
    rover.direction = 'W';
    break; 
    case 'W' :
    rover.direction = 'N'; 
    break; 
  }
};

// FUNCTION TO CHECK IF THERE IS ANY OBSTACLE AHEAD.

function checkObstacle (){
  for (let i = 0; i < obstacles.x.length; i++){
    if(obstacles.x[i] === rover.x && obstacles.y[i] === rover.y){
      console.log('An obstacle was found! Order aborted!');
      return true; 
    } else if(rover2.x=== rover.x && rover2.y === rover.y){
      console.log('Another rover found in your path! Order aborted!');
      return true; 
    } else {
      return false; 
    }
  }
};

// MOVE FORWARD FUNCTION

function moveForward () {
    console.log("moveForward was called");
    travelLog.push(['[x' + rover.x +',' + 'y' + rover.y + ']' ]);
    
    if(rover.direction === 'N' && rover.y > 0 ){ // NORTHBOUND MOVEMENT
        rover.y--;
        if(checkObstacle()){
          rover.y++;
        };
       

    } else if(rover.direction === 'W' && rover.x > 0){ // WESTBOUND MOVEMENT
      rover.x--;
      if(checkObstacle()){
        rover.x++;
      };
    

    } else if(rover.direction === 'S' && rover.y < 9 ){ // SOUTHBOUND MOVEMENT
      rover.y++;
      if(checkObstacle()){
        rover.y--;
      };
    
  } else if(rover.direction ==='E' && rover.x <9){ //EASTBOUND MOVEMENT
        rover.x++; 
        if(checkObstacle()){
          rover.x--;
        };
              
    } else {
      console.log('Your order tried to put the rover off the grid! Order cancelled!');
    };


    console.log(`The new position of the rover is heading ${rover.direction} row ${rover.x} column ${rover.y}`);
}

function moveBackwards () {
  console.log("moveBackwards was called");

  if(rover.direction === 'N' && rover.y < 9){ // SOUTHBOUND MOVEMENT
      rover.y++;
    if (checkObstacle()){
      rover.y--;
    }
    
    
  } else if(rover.direction === 'W' && rover.x < 9){ // WESTBOUND MOVEMENT
      rover.x++;
      if (checkObstacle()){
        rover.x--;
      }
    
  } else if(rover.direction === 'S' && rover.y > 0){ //SOUTHBOUND MOVEMENT
      rover.y--;
      if (checkObstacle()){
        rover.y++;
      }
    
  } else if(rover.direction ==='E' && rover.x > 0){ //EASTBOUND MOVEMENT
      rover.x--; 
      if (checkObstacle()){
        rover.x++;
      }
  
  } else {
    console.log('Your order tried to put the rover off the grid! Order cancelled!');
  }
  travelLog.push(['[x' + rover.x +',' + 'y' + rover.y + ']' ]);
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
      console.log('There was a problem!The command was not recognized!');
    }
  }
 
  console.log('The final position of the rover is: heading ' + rover.direction + ' ' + 'row ' + rover.x + ' column ' + rover.y);
  console.log('The route taken by your rover was' + travelLog);
}













