
//! selectors

const todoInput=document.querySelector(".todo-input"); // inputu aldık
const todoButton=document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo=document.querySelector(".filter-todo");


//! alerts 
const alertSuccess= document.querySelector(".alert-success");
const alertWarning= document.querySelector(".alert-warning");


//! events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteList);
filterTodo.addEventListener("click", todoFilter);


//! functions

function addTodo(e){
    e.preventDefault();


    const isEmpty= str=> !str.trim().length;

    if(isEmpty(todoInput.value)){
      alertWarning.style.display="block";
      setTimeout(() => {
         alertWarning.style.display="none";
      }, 3000);

      
       //?clear todo input value

       
       todoInput.value="";

    }

    else{
       alertSuccess.style.display="block";
       setTimeout(() => {
        alertSuccess.style.display="none";
       }, 3000);


       //? create todo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
   
   
    //? check mart button
     const completedButton=document.createElement("button");
     completedButton.innerHTML=" <i class='fa-solid fa-check success'></i>";
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);
   


     //? check li

     const newTodo = document.createElement("li");
     newTodo.innerText=todoInput.value;
     newTodo.classList.add("todo-item");
     todoDiv.appendChild(newTodo);
    



     //? cheack  trash button

     const trashButton = document.createElement("button");
     trashButton.innerHTML="<i class='fa-solid fa-circle-xmark warning'></i>";
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);

     

       todoList.appendChild(todoDiv);
     

       //?clear todo input value

       
       todoInput.value="";


    }

     
   
    
      

}


function deleteList(e){
   const item = e.target;

   
   if(item.classList[0]==="trash-btn"){
      const todo=item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend",function(){
         todo.remove();
      })
   }


   if(item.classList[0]==="complete-btn"){
      const todo=item.parentElement;
      todo.classList.toggle("completed");

   }
     
}


function todoFilter(e){
    const todos = todoList.childNodes;

    todos.forEach(function(item){
      

      switch(e.target.value){
         case "all":
            item.style.display ="flex";
            break;

         case "completed":
            if(item.classList.contains("completed")){
               item.style.display="flex";
            }

            else{
               item.style.display="none";
            }
 break;
         case "uncompleted":
            if(!item.classList.contains("completed"))
            {
               item.style.display="flex";
            }

            else{
               item.style.display="none";
            }
            break;
      }
    })
}





