import '../scss/style.scss';
import {reprint} from './reprintAll.js';
import {toDoClick} from './toDoClick.js';
import {database} from './database.js';
import {modifyToDo} from './modifyToDo.js';

const input = document.querySelector("input[data-message]");
input.addEventListener('focusout', function(){
    if (input.value.length === 0) {
        input.previousElementSibling.innerHTML = input.getAttribute("data-message");
        return;
    }else{
        input.previousElementSibling.innerHTML = '';
    }
})

const submit = document.querySelector('#submitAction');
const action = document.querySelector('#action');
//ascoltatore al click del bottone "Go"
submit.addEventListener('click', function () {
    if (action.value.length !== 0) {
        //qui creiamo un nuovo oggetto interno al toDos
    var toDo = {
        message:action.value,
        check: false,
        id: Math.random(),
    };
    //pushamo la nuova toDo interno all'array di oggetti toDos
    database.toDos = [
        toDo,
        ...database.toDos
    ]
    //condizioni per pulire il campo di input
    if (action.value !== 0) {
        action.value = "";
    }
    //eseguiamo la funzoine per controllare tutti gli oggetti interni all'array
    reprint(database);
    }else{
        input.previousElementSibling.innerHTML = input.getAttribute("data-message");
        return;
    }
})
//passiamo le funzioni dal file.njk dal DOM a JavaScript
window.toDoClick = toDoClick;
window.modifyToDo = modifyToDo;

