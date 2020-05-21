
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  //func that populates fecth titles and inserts them in html list item
  const populateTodos = (place) => {
    // console.log(arrayOfTodos[0].title)
  
    for(i=0; i<=199;i++){
      const element = document.getElementById("todo-list")
      const item =  document.createElement("LI")

      if(arrayOfTodos[i].completed == true){
        item.innerHTML = arrayOfTodos[i].title.fontcolor("red")
      } else{
        item.innerHTML = arrayOfTodos[i].title.fontcolor('blue')
      }

      element.appendChild(item).html

    }

    myArr = []
    for(i=0; i<=199;i++){
      a = arrayOfTodos[i].id
      b = arrayOfTodos[i].userId
      c = arrayOfTodos[i].title    
      d = arrayOfTodos[i].completed
      myArr.push(a, b, c, d)

      console.log(myArr[0])
    }


  }