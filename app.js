function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
};
Question.prototype.chechAnswer = function(answer){
    return this.answer === answer;
}

//Quiz Constructor : 
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}


Quiz.prototype.isFinish = function(){
    console.log(this.questionIndex);
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.chechAnswer(answer)){
        this.score++;
        
    }
    this.questionIndex ++;
}


var q1 = new Question('Between which code blocks is JavaScript written?', ['<javascript>', '<scripting>', '<js>', '<script>'] , '<script>');
var q2 = new Question('How to display Hello World message in messagebox?', ["msg('Hello World')", "msgBox('Hello World')", "alert('Hello World')", "alertBox('Hello World')"], "alert('Hello World')");
var q3 = new Question('Which built-in method returns the length of the string?', ['length()','size()', 'index()', 'None of the above'], 'length()');
var q4 = new Question("Which built-in method returns the string representation of the number's value?",['toValue()', 'toNumber()','toString()', 'None of the above'], 'toString()');
var q5 = new Question("Which of the following function of Array object removes the first element from an array and returns that element?", ['reverse()', 'shift()', 'slice()', 'some()'], 'shift()');

var questions = [q1, q2, q3, q4, q5];

var quiz = new Quiz(questions);

var styles = {
    visibility: 'visible'
}

$("#javascript").click(function(){
        
    $(".card").css(styles);
  
})
$("#python").click(function(){
        
    $(".card").css(styles);
  
})
$("#java").click(function(){
        
    $(".card").css(styles);
  
})
$("#c").click(function(){
        
    $(".card").css(styles);
  
})
$("#php").click(function(){
        
    $(".card").css(styles);
  
})

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        var choices = quiz.getQuestion().choices;
        console.log(quiz.getQuestion());
        document.querySelector('.card-title').textContent = quiz.getQuestion().text;
        for(let i = 0; i<choices.length; i++){
            var element = document.querySelector('#btn'+i);
            element.textContent = choices[i];
            var id = element.id;
            guess(id,choices[i]);
          
        }

    }
}
function guess(id, content){
    console.log(id);
    var button = document.getElementById(id);
    button.addEventListener('click',function(){
        console.log("Soru yanıtlandı")
        quiz.guess(content);
        loadQuestion();
    })
    
}
function showScore(){
    alert('Score : ' + (quiz.score+1)+'/' +questions.length);
}

