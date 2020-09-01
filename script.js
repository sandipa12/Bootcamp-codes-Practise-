
/*var guess = prompt ("please guess a number");
var secretNumber= 5;

if (Number(guess) === secretNumber){
	alert("you got it!");
}
else if (Number(guess)>secretNumber){
	alert("your guess is too high ")
}
else
	alert("your guess is too low");
*/




/*console.log("print all numbers divisible by 3 and 5 between 5 and 50")

var count = 5;
while (count<50){
	if (count % 3 === 0 && count % 5 === 0){
		console.log(count);
	}
	count++;
}


console.log("print numbers between 1 and 10 ")
var num = 1;
while (num <= 10){
	console.log(num);
	num++;
} */


/*var ans = prompt("did you get the right answer?");

while (ans.indexOf("yes") == -1){
	var ans = prompt("did you get the right answer?");
}


alert("yay, you made it!") */




/*
console.log("print all numbers between -10 and 20");

for (var i = -10; i<= 20 ;i++){
	console.log(i);
}

console.log("print all numbers divisible by 3 and 5 between 5 and 50");

for(var i = 5; i <=50 ; i++){
	if (i % 3 ===0  && i % 5 === 0){
		console.log(i)
	}
}




function isEven (num){
	return (num %2 === 0)
}

isEven(12)




var result = 1; 
function factorial(num){
for( var i = 2; i <= num; i++){
result *= i
}
return result;
}

factorial(4)





x = 10
function number(){
	x = 9
	console.log(x)

}

x = 10
function number(){
	var x = 9
	console.log(x)
}
*/


// list 
var todo = ["wake up"]
// ask user what to do 
var input = prompt("what would you like to do ?")

// if no quit 
while (input !== "quit"){

//if list , show list
if(input == "list"){
	TodoList();

}

//if add list, add to list
else if 
	(input === "new"){
		New();
	}
		//delete unwanted
		else if (input=== "delete"){
			Delete()
		}
		var input = prompt("what would you like to do ?")


//if quit , display message
console.log("okay you quit the app")



function TodoList (){
	console.log("******")
	todo.forEach(function(todo, i){

		console.log(i + ":" + todo)
	})
	console.log("******")


}

function New(){
	var newTodo = prompt("add new ")
	todo.push(newTodo)
	console.log("added todo")

}

function Delete(){
	var index = prompt("enter index of item to delete")
	todo.splice(index,1)
	console.log("deleted")
}






















































