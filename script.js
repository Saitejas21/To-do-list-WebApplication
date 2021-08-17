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

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = []; //create blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into js object
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag = `<li> ${element} <span><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
}