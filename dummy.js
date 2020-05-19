const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }


  const populateTodos = () => {
    // console.log(arrayOfTodos[0].title)
    const element = document.getElementById("todo-list")
    let listItem =  document.createElement("LI").innerHTML= arrayOfTodos[0].title
    console.log(listItem)

  }