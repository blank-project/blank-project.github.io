const fs = require('fs');
const XRegExp = require('xregexp');

// le but de la séance d'aujourd'hui est de s'entraîner à programmer en
// javascript et à manipuler des listes et des dictionnaires.

// On va compter les fréquences d'apparition de mots dans un texte
// on verra que cette description simple d'un document suffit pour savoir
// grossièrement de quoi il parle.

// quelques fonctions pour vous aider à manipuler les documents qu'on va
// utiliser:


// lire un fichier
function readFile(filename){
    return fs.readFileSync(filename, 'utf8');
}


// lire un fichier et retourner les lignes qu'il contient dans un tableau
function readLines(filename){
    let text = fs.readFileSync(filename, 'utf8');
    let docs = text.split('\n');
    return docs
}


// découper un texte en mots
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


// Écrire une fonction qui compte combien de fois chaque mot apparaît dans un
// texte
function wordFrequencies(sentence){
    let frequencies = {};
    for (let token of sentence){
        // ...
    }
    return frequencies;
}


// Écrire une fonction qui élimine certains mots (contenus dans stopWords)
// d'un dictionnaire
function removeStopWords(dictionnary, stopWords){
    // ...
}


// Écrire une fonction qui trie les paires (mot, fréquence) du plus fréquent
// au moins fréquent.
function sortedWordFreq(wordFreq){
    // ..
}


function sortedWords(wordFreq){
    let sortedFreq = sortedWordFreq(wordFreq);
    let vocab = [];
    for(let wf of sortedFreq){
        vocab.push(wf[0]);
    }
    return vocab;
}

// Écrire une fonction qui retourne les 15 mots les plus fréquents
function topWords(wordFreq, nWords=15){
}

// Comparez les mots les plus fréquents des différents fichiers dans le dossier
// data/

// Si nécéssaire, ajouter des stop words au fichier data/stop_words.txt

// Exercice: utilisez la fonction readLines pour lire un fichier ligne par linge
// (chaque ligne correspond au résumé d'un article de wikipédia) et compter les
// fréquences de mots dans chaque ligne
// Écrivez une fonction qui retourne les documents les plus pertinents pour une
// recherche, par exemple les articles dans lesquels le mot "football" apparaît
// le plus souvent.


let tokenized = tokenize(readFile('data/Histoire_2000.txt'));
let stopWords = readLines('data/stop_words.txt');
let wordFreq = wordFrequencies(tokenized);
removeStopWords(wordFreq, stopWords);
console.log(topWords(wordFreq));
