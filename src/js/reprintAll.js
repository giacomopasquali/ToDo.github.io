var templateRow = require('../nunjucks/components/test.njk');
var templateSuccess = require('../nunjucks/components/success.njk');

//inizalizzazione div del DOM
const list = document.querySelector('.listToDo');
const succ = document.querySelector('.completeTodo');

//creazione 2 stringhe 
var renderHtml = '';
var renderHtml2 = '';
export const reprint = function reprintAll(database) {
    //azzeriamo le stringhe 
    renderHtml = '';
    renderHtml2 = '';
    //ciclo per ogni oggetto interno all'array
    database.toDos.forEach(item => {
        //condizione sul check: true/false
        if (!item.check || item.check === undefined) {
            //assegnamo il file.njk all'oggetto iterato
            renderHtml+= templateRow.render({ 
                message: item.message,
                id: item.id,
            });
        }else{
            //assegnamo il file.njk all'oggetto iterato
            renderHtml2+= templateSuccess.render({ 
                message: item.message,
                id: item.id,
            });
        }
    });
    //incolliamo le stringhe ai relativi blocchi  
    list.innerHTML = renderHtml;
    succ.innerHTML = renderHtml2;
}