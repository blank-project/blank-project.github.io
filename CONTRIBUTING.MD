# Guidelines for Contributing to blank courses writing

 TODO

## Reveal.js
Slideshows are written in HTML or Markdown and displayed using [reveal.js](http://lab.hakim.se/reveal-js/#/)  
To write a slideshow, copy the [template](courses/template.html).  
To serve slideshows through a local file server, run gulp serve --port <PORT> where PORT is the port used for the server. If omitted, defaults to 8080.

### Useful features
- Vertical Slides : Simply put a _section_ in a _section_.
- Fragments : add a _fragment_ class (this implies to write the slide in HTML).
- Speaker notes : put an _aside_ in the slide to add speaker notes.

## Course naming and directory structure

There is a folder for each class section in the arborescence.
Each presentation is a index.html file in the subdirectory named after the class number in the section.

The index.html file should be like this :

```html
<!doctype html>
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
                         data-separator-vertical="\n\n-\|-\n\n"
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

The README.md file should be divided like this :

* A slide ends by `\n\n\n---\n\n\n`.
* A vertical starts by `\n\n-|-\n\n`.
* Speaker notes starts by : `Notes:`

Example :

```
#Test



---



#Second slide



-|-


Vertical slide for second slide




---



Ends second slide

Note: Speaker notes
```
