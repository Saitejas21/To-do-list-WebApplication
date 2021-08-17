const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");

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
}