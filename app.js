let task = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list-item');

let addItem = function() {
    if(task.value === ''){
        alert("You must add something first.")
    }
    else{
        let item = document.createElement("li");
        item.innerText = task.value;
        list.appendChild(item);
    
        let delbtn = document.createElement("span");
        delbtn.classList.add("delete");
        delbtn.innerHTML = "&#10799;";
        item.appendChild(delbtn);

        console.log(task.value);
        
    }
    task.value = '';
}

btn.addEventListener('click', addItem);
task.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addItem();
    }
})


//delete button funtion
list.addEventListener("click", function(event){
    if(event.target.classList.contains("delete")){
        let delItem = event.target.closest("li");
        list.removeChild(delItem);
    }
})


//check or uncheck

list.addEventListener("click", function(event){
    let selectedLi = event.target.closest("li");
    if(event.target.classList.contains("checked")){
        selectedLi.classList.remove("checked");
    }
    else{
        selectedLi.classList.add("checked");
    }
})