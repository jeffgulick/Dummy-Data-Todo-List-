//fetch and save as json format
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  //func that populates fecth titles and inserts them in html list item
  const populateTodos = () => {
    //gets the ol element
    const element = document.getElementById("todo-list")

    for(i=0; i<=199;i++){
    
      let item =  document.createElement("LI");// creates li element and assigns to var item//
      //checking for status of completed//
      if(arrayOfTodos[i].completed == true){
        item.innerHTML = arrayOfTodos[i].title;//using the item because its the easiest to work with, is a string//
        $(item).css('color', 'blue');//assigns all items that meat condition to the color blue with jQuery//

      } else{
        item.innerHTML = arrayOfTodos[i].title;
        $(item).css('color', 'red');
      }
      //appending other object items to the var item
      item.append(' ');
      item.append(arrayOfTodos[i].userId);
      item.append(' ');
      item.append(arrayOfTodos[i].id);
      item.append(' ');
      item.append(arrayOfTodos[i].completed);

      // doComplete = item;
      // console.log(doComplete);
      element.appendChild(item);//appending what ive done to the html ol element above



      // element.appendChild(item).html

    }

  }