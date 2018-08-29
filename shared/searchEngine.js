class SearchEngine {
    constructor(url){
        this.url = url
    }

    set url(url)  {
        this._url = url;
    }
    get url(){
        return this._url;
    }
    getUrl(){
        return this.url;
    }
    getQueryString(queryParams){
        return queryParams.toString();
    }
}
class WikipediaEngine extends SearchEngine {

    set url(url = "https://es.wikipedia.org/w/index.php?fulltext=1&search="){
        this._url = url
    }
    getQueryString(queryParams){
        if (Array.isArray(queryParams)) {
            return queryParams.reduce((s,a)=>s?`${s},${a}`: `${a}`, "")
        } else {
            return ""
        }
    }
}
class SearchEngineConnector {
    constructor(engine){
        this.engine = engine;
    }
    set engine(engine = new WikipediaEngine())  {
        this._engine = engine;
    }
    get engine(){
        return this._engine;
    }
    async lookUpFor (words){
        console.log(JSON.stringify(this))
        console.log(this._engine._url)
        return await fetch(`${this._engine._url}${this.engine.getQueryString(words)}`);
    }
}