(function() {

    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        if (cards[i] !== undefined) {
            cards[i].addEventListener("click", handleCardClick.bind(cards[i]));
        }
    }

    function handleCardClick() {
        location.href = this.getAttribute("data-link");
    }

})();
