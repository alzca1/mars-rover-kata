// const grid = [];

// const random = () => {
//     return Math.floor(Math.random() * 100);
//     }

// const createGridLine = () => {
//  let i = 0; 
//  let line = []; 

//  while (i < 10){
//      let randomCell = random();
//      if(randomCell < 80){
//          line.push('E');  
//      } else {
//          line.push('O');
//      }
//      i++;
//  }
//  return line; 
// }

// const createGrid = () => {
//     let i = 0; 
//     while (i < 10){
//         grid.push(createGridLine());
//         i++;
//     }
//     console.log(grid)

// }


let plan;

function pushPlan (list){
plan = list;
console.log(plan)
}

pushPlan('cccc')

function getCommandPrompt (rover) {
    let commandPlan = prompt(`Please, state the plan for ${rover}`);
    for(let i = 0; i < commandPlan.length; i++)
    sendCommandList(rover,commandPlan);

}