class ToDo{
    #tennivalo;
    #torlesGomb;
    #pipaGomb;

    constructor(index, tennivalo, szuloElem){
        this.#tennivalo = tennivalo;
        this.index = index;
        szuloElem.append(`<tr id="${index}"><td>${tennivalo.toDo}</td><td class="torles"><p>x</p></td><td class="pipa"><p>pipa</p></td></tr>`);

        this.#torlesGomb=$("tr:last-child td.torles");
console.log(this.#torlesGomb)
        this.#pipaGomb=$(".pipa:last-child p");

        this.#torlesGomb.on("click", () => {
            this.#torlesKattint();
        })

        this.#pipaGomb.on("click", () => {
            this.#elvegzettKattint();
        })

    }

    #torlesKattint(){
        const torles = new CustomEvent("torles", {detail: this});
        window.dispatchEvent(torles);
        console.log(this)
    }

    #elvegzettKattint(){
        const elvegzett = new CustomEvent("elvegzett", {detail: this});
        window.dispatchEvent(elvegzett);
        
    }
}

export default ToDo;
