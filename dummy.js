
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
    //gets the element
    const element = document.getElementById("todo-list")

    let doTitle = '';
    let doComplete ='';

    for(i=0; i<=199;i++){
      doTitle = document.createTextNode(arrayOfTodos[i].title)
      console.log(doTitle)

      let item =  document.createElement("LI")//li element

      if(arrayOfTodos[i].completed == true){
        item.innerHTML = arrayOfTodos[i].title.fontcolor("blue")
      } else{
        item.innerHTML = arrayOfTodos[i].title.fontcolor('red')
      }

      element.appendChild(item)

      // element.appendChild(item).html

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