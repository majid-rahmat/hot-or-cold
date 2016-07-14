
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var random = Math.floor((Math.random() * 100));  //comp. generates a random no. from 1-100
	var previousGuesses = [];  //an array/list of nos. already guessed
	var counter = 0;   

    $('#guessButton').click(function(){  //when you click on add,lines 8-10 will execute
    var input = ($('#userGuess').val());  //takes the value of input field
    validate(input);   //invokes the validate function with input variable as an argument 
    $('#userGuess').val('');  //clears out the input box so that previous no. no longer shows
  }); 


  function validate(input){  //called function to make sure guessed no. matches our requirements 
    
    for(var i = 0; i < previousGuesses.length; i++){  //loop that goes over array and increments each time
      if(previousGuesses[i] === input){  //to make sure each guess is unique
        return alert('You already guessed that number!');
      }
    }
    
  if(isNaN(input) || input < 1 || input > 100) {  //makes sure input is a number(not string) and between 1 and 100
    alert('please enter a valid integer');
  } else {
    add(input); // if input is a valid no., add and feedback functions are invoked with same input parameter
    feedback(input);
         }
  
  }
  
  function add(input) { //used to increase counter, add guesses to list and array 
    counter += 1;
    $('#count').text(counter);  
    $('#guessList').append('<li>' + input + '</li>');  //difference??
    previousGuesses.push(input);
  
  }
  
  
  function feedback(input) {  //gives ffeedback whether guess is close or not to random no.
    
    var diff = Math.abs(random - input);  //absolute value of difference between comp. generated no and user guess
    if(diff === 0) {
      $('#feedback').text('You guessed right!');
    }  
    else if(diff <= 10){
      $('#feedback').text('Hot');
    }  
    else if(diff <= 20){
      $('#feedback').text('Warm');
  } 
    else {
      $('#feedback').text('Cold');
  }
  }
  
$('#userGuess').keypress(function(event){  //if user presses a key on the input field
  var input = ($('#userGuess').val());  //since local var, we need to define again??
  if(event.which == 13) {
        validate(input);    
  }
});
  
  function newGame() {
    random = Math.floor((Math.random() * 100));  //new random no generated
    previousGuesses = [];  //new array created
    counter = 0;  //counter pushed back to zero
    $('ul').empty(); //the list and text are emptied/cleared
    $('#feedback').empty();
    $('#count').empty();  
  }
  
  $('.new').click(function(){  //click on new game button, newgame function is invoked
    newGame();
  });


});


