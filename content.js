!(function(){
    var first = true;
    var cards;

    function run() {
        for(var i = 0; i < cards.length; i++) {
            var currentCard = cards[i];
            if(currentCard.desc) {
                var url = currentCard.url.replace('https://trello.com','');

                var trelloCard = document.querySelector('[href="' + url + '"]');
                var descriptionNode = document.createElement("P");
                descriptionNode.appendChild(document.createTextNode(currentCard.desc));
                trelloCard.parentElement.appendChild(descriptionNode);
            }
        }
    }

    var httpRequest = new XMLHttpRequest();

    function handleData() {
        if(httpRequest.status == 200 && first){
            cards = JSON.parse(httpRequest.responseText).cards;
            first = false;
            run();
        }
    }

    httpRequest.onreadystatechange = handleData;
    httpRequest.open('GET', "https://trello.com/1/Boards/mt4BLQwT?cards=visible", true);
    httpRequest.send(null);
})();