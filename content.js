!(function(){

    var first = true;
    var cards;

    function run() {
        for(var i = 0; i < cards.length; i++) {
            var currentCard = cards[i];
            if(currentCard.desc) {
                var url = currentCard.url.replace('https://trello.com','');

                var trelloCard = document.querySelector('[href="' + url + '"]');
                var descriptionNode = createDescriptionNode(currentCard);
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

    function createDescriptionNode(card)
    {
        var descriptionNode = document.createElement("P");
        descriptionNode.style.paddingLeft = "25px";
        descriptionNode.appendChild(document.createTextNode("Description"));

        var hrNode = document.createElement('hr');
        hrNode.style.marginTop = "5px";
        hrNode.style.marginBottom = "5px";

        descriptionNode.appendChild(hrNode);

        var stringArray =  card.desc.split("\n");

        descriptionNode.appendChild(document.createTextNode(stringArray[0]));

        for(var i = 1; i < stringArray.length; i++) {
            descriptionNode.appendChild(document.createElement('br'));
            descriptionNode.appendChild(document.createTextNode(stringArray[i]));
        }

        return descriptionNode;
    }


    httpRequest.onreadystatechange = handleData;
    httpRequest.open('GET', "https://trello.com/1/Boards/mt4BLQwT?cards=visible", true);
    httpRequest.send(null);
})();