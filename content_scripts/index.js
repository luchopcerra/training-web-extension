
let words = new WordsFromDom("H1", (word)=>word.length>5);
// messages passing with background script to display results
browser.runtime.sendMessage({"words": words.toLookUp()});