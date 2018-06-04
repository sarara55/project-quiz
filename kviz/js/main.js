var myQuestions = [
    {
        question: "Q1. This weather is so ......",
        answers: {
            a: 'depressed',
            b: 'depressing'
            
        },
        correctAnswer: 'b'
    },
    {
        question: "Q2. I will be very ..... if she does well in her test.",
        answers: {
            a: 'surprised',
            b: 'surprising'
            
        },
        correctAnswer: 'a'
    },
    {
        question: "Q3. My new job is extremely ......",
        answers: {
            a: 'tired',
            b: 'tiring'
            
        },
        correctAnswer: 'b'
    },
    {
        question: "Q4.  He's such a ..... person. He never wants to go out.",
        answers: {
            a: 'bored',
            b: 'boring'
            
        },
        correctAnswer: 'b'
    },
    {
        question: "Q5.  I'm ...... I have no idea what to do.",
        answers: {
            a: 'confused',
            b: 'confusing'
            
        },
        correctAnswer: 'a'
    },
    {
    question: "Q6. I am ..... with my grade in the grammar test.",
        answers: {
            a: 'disappointed',
            b: 'disappointing'
            
        },
        correctAnswer: 'a'
    },
    {
    question: "Q7. Did you hear the ..... news about the accident?",
        answers: {
            a: 'shocked',
            b: 'shocking'
            
        },
        correctAnswer: 'b'
    },
    {
    question: "Q8.  I didn't find his joke very ......",
        answers: {
            a: 'amused',
            b: 'amusing'
            
        },
        correctAnswer: 'b'
    }

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        
        var output = [];
        var answers;

        
        for(var i=0; i<questions.length; i++){
            
            
            answers = [];

            
            for(letter in questions[i].answers){

                
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        
        var userAnswer = '';
        var numCorrect = 0;
        
        
        for(var i=0; i<questions.length; i++){

            
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            
            if(userAnswer===questions[i].correctAnswer){
                
                numCorrect++;
                
                
                answerContainers[i].style.color = '#B8DE1F';
            }
            
            else{
                
                answerContainers[i].style.color = '#DE1F59';
            }
        }

        
        if(numCorrect===8) {
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + '.' + ' <span class="dark">Congratulations!!!</span>';
        } else if(numCorrect===7 || numCorrect===6) {
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + '.' + ' <span class="green">Good job.</span>';
        } else {
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + '.' + ' <a class="tryAgain" href="index.html" >Try again.</a>';
        }
        

            
    }

   
    showQuestions(questions, quizContainer);


    var i = 0;
var txt = ' Adjectives ending in -ed and -ing'; 
var speed = 60; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
    
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

$(document).on("click", function(e){
    if($(e.target).is("#period_select_range_btn")){
      $("#selectPeriodRangePanel").show();
    }else{
        $("#selectPeriodRangePanel").hide();
    }
});

$('#clickNotes').click(function() {
    $('#note').toggle('slow');
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(".top").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });