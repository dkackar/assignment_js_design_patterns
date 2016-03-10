
var view = {

    init: function(){

       do {
         var gridSize = prompt("Enter the grid_size (between 2 - 8) :" );
       } while(!(model.validateGridSize(gridSize)));

    },

    render: function(){
      var cardList = model.getGenerateCards();

      for(i=0; i < cardList.length; i++) {
        var currentCard = model.cardList[i];
        var newCard = '<div class="card" id="' + i + '" data-card-value=' + String(model.getCardValue(currentCard)) + '>Card</div>';
        $('.card-field').append(newCard);
        $('#current-score').text(model.currentScore);
      }

    },

    getCardData: function(target) {
      return target.attr( "data-card-value");
    },

    displayCard: function(target,flipped) {
      console.log(target + ': ' + flipped)
      if (!flipped) {
        var val = 'Card';
      } else {
        var val = $(target).attr( "data-card-value");
      }
      $(target).text(val);
    },


    displayScore: function(score) {
      $('#current-score').text("Current Score: " + score);
    },

    clickCard: function() {
      $('.card').click(function(eventObj) {
        var index = Number($(eventObj.target).attr('id'));

        controller.clickCard(index,$(eventObj.target));
      });
    },

};