const inputElement = document.querySelector('#input');
const buttonAdd = document.querySelector('#button');
buttonAdd.addEventListener('click', addTodo);
const content = document.querySelector('.content');
const total = document.querySelector('#total');
const done = document.querySelector('#done');
const remain = document.querySelector('#remain');
inputElement.focus();
inputElement.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        addTodo()
    }
})
function addTodo() {
    const values = inputElement.value; 
    if (values == "") {
        alert("Please enter your activity...")
    } else {
    content.innerHTML += `<p class='list'> ${values} <span class='close' onClick = "this.parentElement.remove()">${'\u00D7'}</span> </p>`
    inputElement.value = ""
    inputElement.focus();
    countTodo();
    }
};
function countTodo() {
    let count = document.getElementsByTagName("p");
    let x = count.length
    let elseCount = document.getElementsByClassName("checked");
    let y = elseCount.length;
    done.innerHTML = `Done : ${y}`;
    remain.innerHTML = `Remain : ${x-y}`;
    total.innerHTML = `Total Todo : ${x}`
};
content.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'P') {
        ev.target.classList.toggle('checked');
    }
    countTodo();
}, false);