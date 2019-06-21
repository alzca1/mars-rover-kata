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
      if(randomCell < 98){
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

function roverFirstPosition (){
  grid[rover1.y][rover1.x] = rover1.name;
  grid[rover2.y][rover2.x] = rover2.name;
  grid[rover3.y][rover3.x] = rover3.name;
}



function getRoverPosition(rover){
  console.log(`The current heading of rover ${rover.name} is ${rover.direction}`);
  console.log(`The current position of rover ${rover.name} is x${rover.x} y${rover.y}`);
}

function initialInfo () {
  console.log('Welcome to the Mars Rover Simulator! If you need instructions to operate the rover, type "getHelp()". Please, feel free to wander around martian soil :) ');
  console.log('The updated Mars map for today is below. Have a good trip!') 
}

function getHelp(){
  console.log('To control the rover you can either give individual commands or establish a travel plan');
  console.log('The commands are the following: moveForward(), moveBackwards(), turnLeft() and turnRight');
  console.log('The flight plan can be determined by using the getListCommands(), by including the abbreviated set of movements between parentheses (f --> moveForward; b --> moveBackwards; l --> turnLeft; r --> turnRight) within a set of brackets, as in ---> getListCommands("ffrrbl")');
  console.log('The initial position of your rover is x:0, y:0. The location of the obstacles are yet to be determined upon your adventure!'); 
}



function roverNewPosition () {
  console.log(`The new heading of rover${rover.name} is ${rover.direction}`);
}

// FIRST OF ALL, WE INITIATE THE GRID

createGrid();
roverFirstPosition();
initialInfo();
printGrid();




// SECONDLY, WE REPRESENT EACH OF THE ROVERS IN THE GRID


     

// TURNLEFT FUNCTION

function turnLeft(rover){
  console.log(`turn left for ${rover.name} was called!`);
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
  getRoverPosition(rover);
  
};

// TURN RIGHT FUNCTION 

function turnRight(rover){
  console.log(`turn right for for ${rover.name} was called!`);

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
  getRoverPosition(rover);
};

// FUNCTION TO CHECK IF THERE IS ANY OBSTACLE AHEAD.



// MOVE FORWARD FUNCTION

function moveForward (rover) {
    
    console.log(`move forward for ${rover.name} was called!`);
    
    
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
  console.log(`move backwards for ${rover.name} was called!`);

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
  printGrid();
};

  

function sendCommandList (rover,list) {
  for(let i = 0; i < list.length; i++){
    if(list[i] === 'f'){
      moveForward(rover);
      getRoverPosition(rover);
    } else if (list[i] === 'b'){
      moveBackwards(rover);
      getRoverPosition(rover);
    } else if (list[i] === 'r'){
      turnRight(rover);
      getRoverPosition(rover);
    } else if (list[i] === 'l'){
      turnLeft(rover);
      getRoverPosition(rover);
    } else {
      console.log('There was a problem!The command was not recognized!');
    }
  }
 
  
}

function sendCommand (rover, command) {

  switch (command) {

    case 'f':
      moveForward(rover);
      break; 

    case 'b': 
      moveForward(rover); 
      break;
    
    case 'r':
      turnRight(rover); 
      break; 
    
    case 'l': 
    turnLeft(rover); 
    break; 
  
    }


}

function promptRover () {
  const rover = prompt ('Please, state the name of your rover');
  return rover; 
}

function promptRoverPlan (){
  const plan = prompt("Please, state your rover's travel plan");
  return plan; 
}

function alternateCommandsPrompt (){
  const fleet = []; 
  const plans = []; 


}

function alternateCommands () {
  
  const fleet = [rover1, rover2, rover3]
  const plans = ['frfrlbl','bbrffrb', 'fffffff']

  for (let i = 0; i < plans.length; i++){
    for (let j = 0; j < fleet.length; j++)
    sendCommand(fleet[j], plans[j][i]);
  }
  
  for(let x = 0; x < fleet.length; x++){
    console.log(`The route of ${fleet[x].name} was `+ fleet[x].travelLog)
  }
}


















