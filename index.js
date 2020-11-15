//* console.log to confirm our files have been linked
// console.log("things are linked!")
// console.dir(document)



//* Use document.querySelector to select the DOM node (HTML element) with a class of 'title'
const textAtTheTop = document.querySelector(".title")


//*Use the .innerText property to change the title of the website

textAtTheTop.innerText = "Super-Cool To Do List"


//*Use the .style property to change how the title looks

textAtTheTop.style = "color: red; text-decoration: underlinemakes sen"

const header = document.querySelector('header')

header.style = "background-color: #bada55"

textAtTheTop.style.fontSize = "18px"



//*You can also dig into the .style property to set specific styles.  Change the fontSize of our title
//*These are seen as inline styles so they override anything in your linked .css file



//*You can access .classList to receive a list of all the classes assigned to a specific element
//*.classList has built in .add, .remove, and .toggle methods to modify this list
//*Add the class 'dark-mode' to the header text

function logEvent(e){ 
    console.log(e) 
    } 


textAtTheTop.addEventListener('click', logEvent)

textAtTheTop.addEventListener('mouseover', (e) => {
    textAtTheTop.classList.toggle('dark-mode');
})


//*Use document.getElementsByTagName to grab the form with an id of 'color-form' (Remember that this method returns a node list which you'll need to access with an index)

const form = document.getElementsByTagName('form')[0]

console.log(form)


//*Write a function to change the background color of the div with a class of 'content-hold' to whatever is typed in to the color input.

function changeColor(e){
    e.preventDefault()
    const colorInput = document.getElementById('color-input')
    const contentHold = document.querySelector('.content-hold')
    contentHold.style.backgroundColor = colorInput.value
    colorInput.value = ""
}

form.addEventListener("submit", changeColor)




//*Use .addEventListener to attach the color change function to the submit event of the color-form

//*Demonstrate event bubbling by attaching an event listener to the 'todo-hold' div.

//*Complete the functionality of our todo list
//*Include a warning if the user attempts to submit an empty todo



const todoButton = document.getElementById ('todo-button')

/*
1. TODO: Capture the value of the todo input
2. Create a new <li></li> element
3. Attach the new element to my todo list
*/

function addTodo(e){
        const todoInput = document.getElementById('todo-input')

        const newLi = document.createElement("li")

        newLi.innerText = todoInput.value

        newLi.addEventListener('dblclick', (e) =>{
        newLi.remove()
    })
    
        const todoList = document.getElementById('todo-list')

        todoList.appendChild(newLi)

        todoInput.value =""
}



todoButton.addEventListener('click', addTodo)