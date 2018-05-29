import nltk

stop_words = nltk.corpus.stopwords.words('french')

with open('data/stop_words.txt', 'w') as f:
    for word in stop_words:
        f.write(word)
        f.write('\n')
