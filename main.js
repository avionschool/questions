let Question = function(question, answer, correctAnswer) {
    this.question = question; 
    this.answer = answer;  
    this.correctAnswer = correctAnswer; 
}; 


var question1 = new Question("How many members are there in TWICE?", ["7","8","9"], 2);
var question2 = new Question("Who is the main dancer in TWICE?", ["Momo","Dahyun","Nayeon"], 0);
var question3 = new Question("What year did TWICE debut?", ["2014","2015","2016"], 1);