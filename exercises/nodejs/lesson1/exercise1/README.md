# Node.js > Lesson 1 > Exercise 1

Ajouter le repository pour Node.js
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

Si **curl** n'est pas installé, le faire : 
```bash
sudo apt-get install -y curl
```

Installer Node.js
```bash
sudo apt-get install -y nodejs
```

Tester :
```bash
nodejs -v
```

La dernière ligne doit afficher `vX.X.X` avec la version de node que vous avez installé.

Executer : 
```bash
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
