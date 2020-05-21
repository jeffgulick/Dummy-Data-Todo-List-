
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

    let doComplete ='';

    for(i=0; i<=199;i++){
    
      let item =  document.createElement("LI");//li element

      if(arrayOfTodos[i].completed == true){
        item.innerHTML = arrayOfTodos[i].title.fontcolor("blue");

      } else{
        item.innerHTML = arrayOfTodos[i].title.fontcolor('red');
      }

      item.append(' ');
      item.append(arrayOfTodos[i].userId.toString());
      item.append(' ');
      item.append(arrayOfTodos[i].id.toString());
      item.append(' ');
      item.append(arrayOfTodos[i].completed);

      doComplete = item;
      console.log(doComplete);
      element.appendChild(item)



      // element.appendChild(item).html

    }

  }