const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; //get user entered value
    if(userData.trim() !=0){ //if user values aren't only spaces
        addBtn.classList.add("active") //active the add button
    }else{
        addBtn.classList.remove("active") //unactive the add button
    }
}
showTasks();//calling showTasks function


// if user click on the add button

addBtn.onclick = ()=>{
    let userData = inputBox.value; //get user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if(getLocalStorage == null){
        listArr = []; //create blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into js object
    }
    listArr.push(userData); //adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into json string
    showTasks();//calling showTasks function
}


//function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = []; //create blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into js object
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; //passing the length value in pendingNumb
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //after adding task clear the input field
}

//delete tasks function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the particular indexed li

    // after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into json string
    showTasks();//calling showTasks function

}
