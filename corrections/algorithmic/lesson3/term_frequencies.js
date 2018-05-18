const fs = require('fs');
const XRegExp = require('xregexp');


function loadTokenized(filename){
    let text = fs.readFileSync(filename, 'utf8');
    let docs = text.split('\n');
    let tokenizedDocs = [];
    for (let doc of docs){
        let words = doc.split(XRegExp('\\PL+'));
        let goodWords = [];
        for (let word of words){
            if(word.length >= 2){
                goodWords.push(word.toLowerCase());
            }
        }
        tokenizedDocs.push(goodWords);
    }
    return tokenizedDocs
}


console.log(loadTokenized('/tmp/text.txt'));
