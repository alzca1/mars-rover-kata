// GRID GENERATOR

const grid = [];

const random = () => { // FUNCTION TO GENERATE RANDOM NUMBERS WHICH WILL BE USED BELOW TO GENERATE RANDOM CELLS (EITHER ('E')MPTY OR ('O')BJECT)
    return Math.floor(Math.random() * 100);
    }

    
const createGridLine = () => { // FUNCTION TO GENERATE THE RANDOM LINES OF THE GRID
 let i = 0; 
 let line = [];
  while (i < 10){
      let randomCell = random();
      if(randomCell < 80){
          line.push('E ');  
      } else {
          line.push('O ');
      }
      i++;
  }
  return line; 
  }



const createGrid = () => { // FUNCTION TO ASSEMBLY THE RANDOM LINES INTO THE GRID VARIABLE
    let i = 0; 
    while (i < 10){
        grid.push(createGridLine());
        i++;
    }
}


const printGrid = () => {
  console.log(grid.join('\n'));
}



// Rover Object Goes Here
// ======================
const rover1 = {
  name: 'R1',
  direction: 'N',
  x : 6, 
  y : 8,
  travelLog: []
};

const rover2 = {
  name: 'R2',
  direction: 'N',
  x : 3, 
  y : 5,
  travelLog: []
};

const rover3 = {
  name: 'R3',
  direction: 'N',
  x : 8, 
  y : 4,
  travelLog: []
};


function getPosition(rover){
  console.log(`The current heading of rover ${rover.name} is ${rover.direction}`);
  console.log(`The current position of rover ${rover.name} is x${rover.x} y${rover.y}`);
}

// FIRST OF ALL, WE INITIATE THE GRID

createGrid();
roverFirstPosition();
console.log('Welcome to the Mars Rover Simulator! If you need instructions to operate the rover, type "getHelp()".Please, feel free to wander around martian soil :) ');
console.log('The updated Mars map for today is below. Have a good trip!');
printGrid();

// SECONDLY, WE REPRESENT EACH OF THE ROVERS IN THE GRID

function roverFirstPosition (){
  grid[rover1.y][rover1.x] = rover1.name;
  grid[rover2.y][rover2.x] = rover2.name;
  grid[rover3.y][rover3.x] = rover3.name;
}


function getHelp(){
  console.log('To control the rover you can either give individual commands or establish a travel plan');
  console.log('The commands are the following: moveForward(), moveBackwards(), turnLeft() and turnRight');
  console.log('The flight plan can be determined by using the getListCommands(), by including the abbreviated set of movements between parentheses (f --> moveForward; b --> moveBackwards; l --> turnLeft; r --> turnRight) within a set of brackets, as in ---> getListCommands("ffrrbl")');
  console.log('The initial position of your rover is x:0, y:0. The location of the obstacles are yet to be determined upon your adventure!'); 
}







     

// TURNLEFT FUNCTION

function turnLeft(rover){
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
  printGrid();
  console.log(`The new heading of rover${rover.name} is ${rover.direction}`);
};

// TURN RIGHT FUNCTION 

function turnRight(rover){
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
  printGrid();
console.log(`The new heading of rover${rover.name} is ${rover.direction}`);
};

// FUNCTION TO CHECK IF THERE IS ANY OBSTACLE AHEAD.



// MOVE FORWARD FUNCTION

function moveForward (rover) {
    
    console.log("moveForward was called");
    
    
    switch (rover.direction) {
      case 'N':
        if(rover.y > 0 && grid[rover.y - 1][rover.x] === 'E '){
          grid[rover.y][rover.x] = 'E ';
          grid[rover.y - 1][rover.x] = rover.name;
          rover.y--;
        } else if (rover.y > 0 && grid[rover.y - 1][rover.x] === 'O ') {
          console.log('There is an obstacle ahead! Order cancelled!')
        } else if (rover.y > 0 && grid[rover.y - 1][rover.x][0] === 'R') {
          console.log('There is another rover in your path! Order cancelled!') 
        } else {
          console.log('Your order tried to put the rover off the grid! Order cancelled!') 
        } 
        break;

        case 'W':
            if(rover.x > 0 && grid[rover.y][rover.x - 1] === 'E '){
              grid[rover.y][rover.x] = 'E ';
              grid[rover.y][rover.x - 1] = rover.name;
              rover.x--;
          } else if (rover.x > 0 && grid[rover.y][rover.x - 1] === 'O ') {
              console.log('There is an obstacle ahead! Order cancelled!');
          } else if (rover.x > 0 && grid[rover.y][rover.x - 1][0] === 'R ') {
              console.log('There is another rover in your path! Order cancelled!')
          } else {
              console.log('Your order tried to put the rover off the grid! Order cancelled!') 
          }
          break;

          case 'S':
            if(rover.y < 9 && grid[rover.y + 1][rover.x] === 'E '){
               grid[rover.y][rover.x] = 'E ';
               grid[rover.y + 1][rover.x] = rover.name;
               rover.y++;
            } else if (rover.y < 9 && grid[rover.y + 1][rover.x] === 'O ') {
               console.log('There is an obstacle ahead! Order cancelled!');
            } else if (rover.y < 9 && grid[rover.y + 1][rover.x][0] === 'R') {
              console.log('There is another rover in your path! Order cancelled!')
            } else {
              console.log('Your order tried to put the rover off the grid! Order cancelled!') 
            }
            break;

          case 'E':
            if(rover.x < 9 && grid[rover.y][rover.x + 1] === 'E '){
               grid[rover.y][rover.x] = 'E ';
               grid[rover.y][rover.x + 1] = rover.name;
               rover.x++;
            } else if (rover.x < 9 && grid[rover.y][rover.x + 1] === 'O ') {
               console.log('There is an obstacle ahead! Order cancelled!')
            } else if (rover.x < 9 && grid[rover.y][rover.x + 1][0] === 'R'){
               console.log('There is another rover in your path! Order cancelled!') 
            } else {
              console.log('Your order tried to put the rover off the grid! Order cancelled!') 
            }
            break;
    };
    rover.travelLog.push('[x' + rover.x +',' + 'y' + rover.y + ']');
    printGrid();
};

// MOVE BACKWARDS FUNCTION 

function moveBackwards (rover) {
  console.log("moveBackwards was called");

  switch (rover.direction) {
    case 'N':
      if(rover.y < 9 && grid[rover.y + 1][rover.x] === 'E '){
        grid[rover.y][rover.x] = 'E ';
        grid[rover.y + 1][rover.x] = rover.name;
        rover.y++;
      } else if (rover.y < 9 && grid[rover.y + 1][rover.x] === 'O ') {
        console.log('There is an obstacle ahead! Order cancelled!')
      } else if (rover.y < 9 && grid[rover.y + 1][rover.x][0] === 'R'){
        console.log('There is another rover in your path! Order cancelled!') 
      } else {
        console.log('Your order tried to put the rover off the grid! Order cancelled!');
      }
      break;

      case 'W':
          if(rover.x < 9 && grid[rover.y][rover.x + 1] === 'E '){
            grid[rover.y][rover.x] = 'E ';
            grid[rover.y][rover.x + 1] = rover.name;
            rover.x++;
        } else if (rover.x < 9 && grid[rover.y][rover.x + 1] === 'O ') {
            console.log('There is an obstacle ahead! Order cancelled!')
        } else if (rover.x < 9 && grid[rover.y][rover.x + 1][0] === 'R') {
            console.log('There is another rover in your path! Order cancelled!')
        } else {
            console.log('Your order tried to put the rover off the grid! Order cancelled!') 
        }
        break;

        case 'S':
          if(rover.y > 0 && grid[rover.y - 1][rover.x] === 'E '){
             grid[rover.y][rover.x] = 'E ';
             grid[rover.y - 1][rover.x] = rover.name;
             rover.y--;
          } else if (rover.y > 0 && grid[rover.y - 1][rover.x] === 'O') {
             console.log('There is an obstacle ahead! Order cancelled!')
          } else {
             console.log('There is another rover in your path! Order cancelled!') 
          }
          break;

        case 'E':
          if(rover.x > 0 && grid[rover.y][rover.x - 1] === 'E '){
             grid[rover.y][rover.x] = 'E ';
             grid[rover.y][rover.x - 1] = rover.name;
             rover.x--;
          } else if (rover.x > 0 && grid[rover.y][rover.x - 1] === 'O ') {
             console.log('There is an obstacle ahead! Order cancelled!')
          }  else if (rover.x > 0 && grid[rover.y][rover.x - 1][0] === 'R') {
             console.log('There is another rover in your path! Order cancelled!')
          } else {
             console.log('Your order tried to put the rover off the grid! Order cancelled!') 
          }
          break;
  };
  rover.travelLog.push('[x' + rover.x +',' + 'y' + rover.y + ']');
  console.log(grid);
};

  

function commandList (list,rover) {
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
 
  console.log(`The final position of  ${rover} is: 'heading` + rover.direction + ' ' + 'row ' + rover.x + ' column ' + rover.y);
  console.log(`The route taken by your ${rover} was ` + travelLog.rover);
}













