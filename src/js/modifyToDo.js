import {database} from './database.js';
import {reprint} from './reprintAll.js';

export const modifyToDo = function modifyToDo(e) {
    var input = e.nextElementSibling;
    var findId = input.getAttribute("data-id");
    //inizzializzo funzione per identificare tramite id oggetto selezionato 
    function newFinder(element) {
        return element.id == findId;
    }
    var found = database.toDos.find(newFinder);
    var label = input.nextElementSibling;
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("value", `${found.message}`);
    label.appendChild(y).addEventListener('focusout', function () {
        //creo nuovo array
        var mess = [];
        //carico il nuovo input   
        mess.push(y.value);
        //sostituisco a quello attuale
        found.message = mess;
        //passo i nuovi valori
        reprint(database);
        //elimino il campo di input
        label.removeChild(y);
    });
}







