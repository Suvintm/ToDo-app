let todolist=[];

function addtodo(){
    let inputelement = document.querySelector
    ('#todo-input');
    let todoitem = inputelement.value;
    todolist.push(todoitem);
    inputelement.value = '';
    displayItems();

}

function displayItems(){
    let containerElements = document.querySelector
    ('.todo-cont');
    let newHtml = '';

    for( let i=0 ; i< todolist.length ; i++){
        newHtml += `
        <div>
           <span> ${todolist[i]}</span>
           <button onclick="todolist.splice(${i},1);
           displayItems();" >delete</button>
        </div>
        `;   
     }
     containerElements.innerHTML = newHtml;
 }
    