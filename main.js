let Question = function(question, answer, correctAnswer) {
    this.question = question; 
    this.answer = answer;  
    this.correctAnswer = correctAnswer; 
    this.askQuestion = function() {
        var randomNumber = Math.floor(Math.random()*3)
        console.log(randomNumber)
        questionsArray[randomNumber]
        console.log(this.question)
        console.log(this.answer)
    }
    this.checkAnswer = function (answer) {
        if (answer == this.correctAnswer) {
            console.log('Correct Answer');
        } else {
            console.log('Incorrect Answer');
        }
    }
}; 

let questionsArray = [question1, question2, question3];
var question1 = new Question("How many members are there in TWICE?", ["7","8","9"], 2);
var question2 = new Question("Who is the main dancer in TWICE?", ["Momo","Dahyun","Nayeon"], 0);
var question3 = new Question("What year did TWICE debut?", ["2014","2015","2016"], 1);

(function start(){
    let tempAnswer = prompt(question1.askQuestion());
    question1.checkAnswer(tempAnswer);
})();
