import "./main.css"

const todos = [
	{
		title: "Todo #1",
		completed: true,
	},
	{
		title: "Todo #2",
		completed: false,
	},
	{
		title: "Todo #3",
		completed: true,
	},
]

const ulElement = document.querySelector( "ul" )
const inputElement = document.querySelector( "input" )
const buttonElement = document.querySelector( "button" )

buttonElement.onclick = () => {

	createTodoItem( inputElement.value, false )
}

for ( const todo of todos ) {

	createTodoItem( todo.title, todo.completed )
}

function createTodoItem( title, completed ) {

	const liElement = document.createElement( "li" )
	const titleElement = document.createElement( "span" )

	liElement.onclick = () => liElement.classList.toggle( "completed" )
	titleElement.className = "title"
	liElement.className = completed ? "completed" : ""

	liElement.appendChild( titleElement )

	titleElement.textContent = title

	ulElement.appendChild( liElement )
}

// TERNARY OPERATOR

// const age = 14

// console.log( age > 14 ? "OK" : 20 > 10 ? "A" : "B" )
// console.log( age > 14 ? "OK" : 20 > 10 ? "A" : "B" )

// if ( age > 14 ) {

// 	console.log( "OK" )
// }
// else {

// 	console.log( "NOT" )
// }
