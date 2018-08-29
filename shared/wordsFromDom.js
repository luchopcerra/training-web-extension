class WordsFromDom {
    constructor(fromTag = 'H1', condition = ()=>true){
        this.fromTag = fromTag;
        this.condition = condition;
        this.words =    Array.from(document.getElementsByTagName(fromTag))
                            .map(h1=>h1.textContent.split(" ").filter(condition))
                            // acá voy a usar un reduce and concat para implementar un flatten
                            .reduce((acc, val) => acc.concat(val), [])
    }

    set condition(condition = ()=>true){
        this._condition = condition
    }
    get condition(){
        return this._condition
    }

    set fromTag(fromTag = 'H1'){
        this._fromTag = fromTag
    }
    get fromTag(){
        return this._fromTag
    }

    toLookUp (){
        return this.words
    }
}