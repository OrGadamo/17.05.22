//Asaf Task
//צור תוכנית השואלת את המשתמש אם יש לו משימה לשמור? אם כן קלוט את המשימה ושמור אותה במערך ושאל שוב וכן הלאה ברגע שסיים את הרשימה תדפיס אותה
function getPrompt(text) {
  return prompt("please enter " + text);
}
function printMyArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
var taskslist = [];
// var countinue = confirm("do you have a new task?");
var i = 0;
while (countinue) {
  taskslist[i++] = getPrompt("a task");
  countinue = confirm("do you have a new task?");
}
console.log("the tasks list");
// printMyArray(taskslist);
