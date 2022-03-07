
var questions = [
     {
           prompt: "Inside which HTML element do we put the JavaScript?\n(a) <script>?\n(b) <javascript>? \n(c) <js>?</js>",
           answer: "a"
     },
     {
          prompt: "Where is the correct place to insert a JavaScript?\n(a) The head?\n (b) The body?\n(c) Both body and head?",
          answer: "b"
     },
     {
          prompt: "What is the correct syntax for referring to an external script called 'xxx.js'?\n(a) <script href='xxx.js'>?\n\ (b) <script scr='xxx.js>?\n(c) <script name='xxx.js'>",
          answer: "b"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);


