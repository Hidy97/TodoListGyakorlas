import ToDo from "./ToDo.js";

class ToDok{
    #ToDolista;
    #elvegzettFeladat=[];
    #torlendoFeladat=[];

    constructor(ToDoLista){
        this.#ToDolista = ToDoLista;

        const szuloElem = $("article table");

        for (let index = 0; index < ToDoLista.length; index++) {
            const toDo = new ToDo(index, ToDoLista[index], szuloElem)
            
        }


        $(window).on("torles", (event) => {
            console.log(event.detail)
            this.#torlendoFeladat.slice(event.detail.index, 1);
        })

        $(window).on("elvegzett", (event) => {
            console.log(event.detail)
           // this.#elvegzettFeladat.push(event.detail.index)
        })
    }
}

export default ToDok;
