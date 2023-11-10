const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if(inputBox.value === '') {
        alert ("Enter Task !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.id = "span1";
        li.appendChild(span);
        span.style.marginRight = "40px"; 
        let span2 = document.createElement("span");
        span2.innerHTML = "\u270e";
        span2.id = "span2";
        li.appendChild(span2);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.id === "span1"){
        e.target.parentElement.remove();
    }
    else if(e.target.id === "span2"){
        let editValue = prompt("Enter Updated value");
        if(editValue !== null) {
            e.target.parentElement.firstChild.textContent = editValue;
        }
    }
});

