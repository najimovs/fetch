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

for ( const todo of todos ) {

	const liElement = document.createElement( "li" )
	const titleElement = document.createElement( "span" )

	titleElement.className = "title"
	// liElement.className = todo.completed ? "completed" : ""

	if ( todo.completed ) {

		liElement.classList.add( "completed" )
	}

	liElement.appendChild( titleElement )

	titleElement.textContent = todo.title

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
