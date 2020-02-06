import {database} from './database.js';
import {reprint} from './reprintAll.js';

//funzoine al click della checkbox
export const toDoClick =function toDoClick(e){
    //importo oggetto selezionato
    var findId = e.getAttribute("data-id");
    //inizzializzo funzione per identificare tramite id oggetto selezionato 
    function newFinder(element) {
        return element.id == findId;
    }
    var found = database.toDos.find(newFinder);
    found.check = !found.check;
    //rieseguo la funzione che cicla gli oggetti
    reprint(database);
}