const fs = require('fs');
const XRegExp = require('xregexp');


function readFile(filename){
    return fs.readFileSync(filename, 'utf8');
}


function readLines(filename){
    let text = fs.readFileSync(filename, 'utf8');
    let docs = text.split('\n');
    return docs
}


function tokenize(doc){
    let words = doc.split(XRegExp('\\PL+'));
    let goodWords = [];
    for (let word of words){
        if(word.length >= 2){
            goodWords.push(word.toLowerCase());
        }
    }
    return goodWords;
}


function wordFrequencies(sentence){
    let frequencies = {};
    for (let token of sentence){
        if (token in frequencies){
            frequencies[token]++;
        }
        else{
            frequencies[token] = 1;
        }
    }
    return frequencies;
}


function removeStopWords(dictionnary, stopWords){
    for (let stop of stopWords){
        delete dictionnary[stop];
    }
}


function sortedWordFreq(wordFreq){
    let freq = Object.entries(wordFreq);
    freq.sort((w1, w2) => w2[1] - w1[1]);
    return freq;
}


function sortedWords(wordFreq){
    let sortedFreq = sortedWordFreq(wordFreq);
    let vocab = [];
    for(let wf of sortedFreq){
        vocab.push(wf[0]);
    }
    return vocab;
}

function topWords(wordFreq, nWords=15){
    return sortedWords(wordFreq).slice(0, nWords);
}


let tokenized = tokenize(readFile('data/Sport_2000.txt'));
let stopWords = readLines('data/stop_words.txt');
let wordFreq = wordFrequencies(tokenized);
removeStopWords(wordFreq, stopWords);
console.log(topWords(wordFreq));
