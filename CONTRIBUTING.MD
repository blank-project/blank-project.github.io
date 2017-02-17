# Guidelines for Contributing to blank courses writing

## Reveal.js
Before contributing, clone the repository and install packages with `npm install`.
Slideshows are written in HTML or Markdown and displayed using [reveal.js](http://lab.hakim.se/reveal-js/#/)  
To serve slideshows through a local file server, run `gulp serve --port <PORT>`.  
**PORT** is the port used for the server. If omitted, defaults to `8080`.

### Useful features
- Vertical Slides : Simply put a _section_ in a _section_.
- Fragments : add a _fragment_ class (this implies to write the slide in HTML).
- Speaker notes : put an _aside_ in the slide to add speaker notes.
- Code blocks : use triple backquotes to add a code block, highlighted by _highlight.js_.

## Course naming and directory structure

Courses are located in the **courses** folder.  
There is a folder for each module and lesson section in the arborescence.  

Example :
> courses / html / lesson1  
> courses / javascript / lesson2

Each presentation is an index.html file in the subdirectory named after the class number in the module.

The index.html file should be like this :

```
html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/includes/lib/reveal/css/reveal.css" type="text/css">
        <link rel="stylesheet" href="/includes/lib/reveal/css/theme/white.css" type="text/css">
        <link rel="stylesheet" href="/includes/lib/font-awesome/css/font-awesome.css" type="text/css">
        <link rel="stylesheet" href="/includes/style/style.css" type="text/css">
        <title>Titre</title>
    </head>
    <body>
        <div class="reveal">
            <div class="slides">
                <section data-markdown="README.md"
                         data-separator="^\n\n\n---\n\n\n"
                         data-separator-vertical="\n\n\*\*\*\n\n"
                         data-separator-notes="^Note:">
                </section>
            </div>
        </div>
        <!-- Need head.js loaded before Reveal for plugins to work -->
        <script src="/includes/lib/head.min.js"></script>
        <script src="/includes/lib/reveal/js/reveal.js"></script>
        <script src="/includes/js/reveal-init.js"></script>
    </body>
</html>
```
(Note that separators are Regexp, specials chars must be escaped).  

The actual course is written in Markdown, and named README.md (so that it is displayed on GitHub).
It should be divided like this :

* A slide ends by `\n\n\n---\n\n\n`.
* A vertical starts by `\n\n***\n\n`.
* Speaker notes starts by : `Note:`

Example :

```
#Test



---



#Second slide



***


Vertical slide for second slide




---



Ends second slide

Note: Speaker notes
```

# Course writing instructions

- Attribute names should be disaplyed in **bold** : `**attribute**`
- Attribute values should be displayed in _italic_ : `_value_`
- Inline code should be displayed using single backticks : \``inline code`\`
- Code blocks should be displayed using triple backticks :

\`\`\`
```
code block
```  
\`\`\`  
(Note that code blocks are highlighted)
