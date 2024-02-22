import inquirer from "inquirer";

// STEP :01
let array: string[] = [];
let loop = true;

// STEP 02:
while (loop) {
  let answer: { todo: string; addmore: boolean } = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "What do you want to add todos?",
    },
    {
      type: "confirm",
      name: "addmore",
      message: "Do you want to add more on your todos",
      default: false,
    },
  ]);
  //   STEP :03
  let { todo, addmore } = answer;

  //   STEP:04
  loop = addmore;

  //   STEP:05
  if (todo) {
    array.push(todo);
  } else {
    console.log("Kindly add valid input in todos");
  }
}
// STEP 06:
if (array.length > 0) {
  console.log("Your todo list");
  array.forEach((todos) => {
    console.log(todos);
  });
} else {
  console.log("Todos not found");
}
