const inputbox = document.getElementById("input-box");
const containerlist = document.getElementById("container-list");

function onhandle() {
    if (inputbox) {
        const li = document.createElement("li");
        li.innerHTML = inputbox.value;
        containerlist.appendChild(document.createElement("li"));
        const span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(document.createElement("span"));
    } else {
        console.error("Input element not found.");
    }
    
    inputbox.value = ""; 
    Savedata();
}
containerlist.addEventListener("click", (e)=> {
    if (e.target.tagName === "LI") { 
        e.target.classList.toggle("checked");
        Savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        Savedata();
    }
}, false);

function Savedata() {
    localStorage.setItem("data", containerlist.innerHTML);
}

function showtask() {
    containerlist.innerHTML = localStorage.getItem("data");
}
showtask();
