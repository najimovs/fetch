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
const themeToggle = document.querySelector( ".theme-toggle" )

const currentTheme = localStorage.getItem( "theme" ) || "light"
document.documentElement.setAttribute( "data-theme", currentTheme )

themeToggle.onclick = () => {
	const theme = document.documentElement.getAttribute( "data-theme" )
	const newTheme = theme === "dark" ? "light" : "dark"
	document.documentElement.setAttribute( "data-theme", newTheme )
	localStorage.setItem( "theme", newTheme )
	themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙"
}

themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙"

inputElement.onkeyup = e => {

	if ( e.code === "Enter" ) {

		createTodoItem( inputElement.value, false )
	}
}

buttonElement.onclick = () => {

	createTodoItem( inputElement.value, false )
}

for ( const todo of todos ) {

	createTodoItem( todo.title, todo.completed )
}

function createTodoItem( title, completed ) {

	if ( typeof title === "string" && title.trim().length > 0 ) {

		const liElement = document.createElement( "li" )
		const checkboxElement = document.createElement( "div" )
		const titleElement = document.createElement( "span" )

		liElement.onclick = () => liElement.classList.toggle( "completed" )
		checkboxElement.className = "todo-checkbox"
		titleElement.className = "todo-text"
		liElement.className = completed ? "completed" : ""

		liElement.appendChild( checkboxElement )
		liElement.appendChild( titleElement )

		titleElement.textContent = title

		ulElement.appendChild( liElement )

		inputElement.value = ""
	}
}
