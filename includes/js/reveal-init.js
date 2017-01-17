(function(){

  Reveal.initialize({
    history : true,
    dependencies : [

        // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        { src: '/includes/lib/js/classList.js', condition: function() { return !document.body.classList; } },

        // Interpret Markdown in <section> elements
        { src: '/includes/lib/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '/includes/lib/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Syntax highlight for <code> elements
        {
          src: '/includes/lib/reveal/plugin/highlight/highlight.js',
          async: true,
          callback: function() {
            hljs.configure({
              languages : ['html', 'xml', 'css', 'json', 'javascript', 'php', 'sql']
            });
            hljs.initHighlightingOnLoad();
          }
        },

        // Zoom in and out with Alt+click
        { src: '/includes/lib/reveal/plugin/zoom-js/zoom.js', async: true },

        //notes
        { src: '/includes/lib/reveal/plugin/notes/notes.js', async: true }//,

        //pdf
      //  { src: '/includes/lib/reveal/plugin/print-pdf/print-pdf.js', async: true}
    ]
  });
})();
