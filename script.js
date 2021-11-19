

var AllData = [
  {
    question: "What is JavaSript ?",
    answer: [
      "A programming language.",
      "A country.",
      "A .",
      "A programming language.",
    ],
    correct: 0,
    points: 100,
  },
  {
    question: "When JavaScript was created ?",
    answer: ["2006", "2021", "1995", "1442"],
    correct: 2,
  },
  {
    question: "Who invented JavaScript ?",
    answer: [
      "Muhammad ibn Musa al-Khwarizmi",
      "Brendan Eich",
      "Steve Jobs",
      "Chef Moha",
    ],
    correct: 1,
    points: 100,
  },
  {
    question: "Is Java === JavaScript ?",
    answer: ["True", "False"],
    correct: 1,
    points: 100,
  },
  {
    question: "What was the first name of JavaScript when it was released ?",
    answer: ["EcmaScript", "Mocha", "LiveScript"],
    correct: 1,
    points: 100,
  },
  {
    question: "What is SQL ?",
    answer: ["Programming language", "Mocha", "LiveScript"],
    correct: 0,
    points: 100,
  },
  {
    question: "Is angular a frontend framework ?",
    answer: ["True", "False"],
    correct: 0,
    points: 100,
  },
  {
    question: "React is based on...",
    answer: ["HTML", "JavaScript", "Dart"],
    correct: 1,
    points: 100,
  },
  {
    question: "What HTML stands for ?",
    answer: [
      "Home Tool Markup Language",
      "Hope Test Mate Language",
      "Hyper Text Markup Language",
    ],
    correct: 2,
    points: 100,
  },
  {
    question: "What is the name of our class",
    answer: ["Alan turing", "Brendan Eich", "Ada lovelace", "YouCode 2/2"],
    correct: 1,
    points: 100,
  },
  {
    question:
      "How Old were Elon musk when he became the richest person on earth ? ",
    answer: ["49", "50", "55", "48"],
    correct: 0,
    points: 100,
  },
];
var GameData = []



if (localStorage.getItem("questions") == null) {
  for (i = 0; i < 5; i++) {
    var random = Math.floor(Math.random() * AllData.length);
    var picked = AllData[random];
    if (GameData.includes(picked)) {
      i--;
    } else {
      GameData.push(picked);
    }
  }

  localStorage.setItem("questions", JSON.stringify(GameData));

  // var score = localStorage.getItem("isval");

  // var isval = []
  // isval.push(score);
  // function Quizz(){
};

let ra = JSON.parse(localStorage.getItem('questions'));


// console.log(GameData);


// const test = document.getElementById('sasa');
// let btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// btn.classList = "answer";
// console.log(btn);
// console.log(GameData[3].answer.length);
// for (let i = 0; i < GameData[0].answer.length; i++){
//     let question = document.getElementById("question");
//     question.innerHTML = GameData[0].question;
//     let test = document.getElementById("answer");
//     let btn = document.createElement("button");
//     btn.innerHTML = GameData[0].answer[i];
//     btn.classList = "answer";
//     test.appendChild(btn);
// }

// for (let i = 0; i < GameData[0].answer.length; i++){
//     if (i == GameData[0].correct) {
//         btn.addEventListener("click", function () {
        // btn.classList = "correct";
        // btn.value = 1;
        // isval.push("1");
//         for (let f = 0; f < disable.length; f++) {
        
//         disable[f].disabled = true;
//         }
//         // localStorage.setItem("isval", isval);
//         console.log(disable);

        
//       }, { once: true });
// }
// let disable = document.querySelectorAll("#disable");
// function correct() { 
  
  
//   for (let f = 0; f < 4; f++) {
//     disable[f].disabled = true;
//   }
// }
let isval = []

let added = JSON.parse(localStorage.getItem("points"))
let currentscore = JSON.parse(localStorage.getItem("score"))

let index = isval.concat(added);

var filtered = index.filter(function (el) {
  return el != null;
});



const points = {};

filtered.forEach(function (x) {
  points[x] = (points[x] || 0) + 1;
});


let progress = document.querySelector("#file");
progress.value = filtered.length;

let score = document.querySelector("#score");
if (points[1] === undefined) {
  score.innerHTML = '0';
}else{
    score.innerHTML = currentscore;
}




if (filtered.length === 5) {
Swal.fire({
  title: "Your Nickname Here:",
  input: "text",
  inputAttributes: {
    autocapitalize: "off",
  },
  confirmButtonText: "Submit",
  showLoaderOnConfirm: true,
  preConfirm: (nickname) => {
    if (nickname == "" || nickname == null) {
        Swal.showValidationMessage(`Name is required`);
    }else{
        let scores = [
          {
            name: nickname,
            score: currentscore,
          },
        ];
       
        if (localStorage.getItem("highscores") == null) {
          localStorage.setItem("highscores", JSON.stringify(scores));
        } else {
          let oldscores = JSON.parse(localStorage.getItem("highscores"));
          let highscores = oldscores.concat(scores);
          localStorage.setItem("highscores", JSON.stringify(highscores));
        }

        localStorage.removeItem("points");
        localStorage.removeItem("questions");
        window.location.href = "index.html";
    }
    
  },
//   allowOutsideClick:
});
    
}else{
  for (let i = 0; i < ra[filtered.length].answer.length; i++) {
    let question = document.getElementById("question");
    question.innerHTML = ra[filtered.length].question;
    let test = document.getElementById("answer");
    let btn = document.createElement("button");
    btn.innerHTML = ra[filtered.length].answer[i];
    btn.classList = "answer";
    btn.setAttribute("id", "sarl"[i]);

    // let disable = getElementsByClassName('answer');
    test.appendChild(btn);

    if (i == ra[filtered.length].correct) {
      btn.addEventListener(
        "click",
        function () {
          btn.classList = "correct";
          let points = ra[filtered.length].points;
          let savedpoints = JSON.parse(localStorage.getItem("score"));
          let finalpoints;
          if (savedpoints == null) {
            finalpoints = points
          }else{
            finalpoints = points + savedpoints;
          }
          console.log(finalpoints);
          
          localStorage.removeItem("socre");
          localStorage.setItem("score", JSON.stringify(finalpoints));
          let add = [1];
          let lcs = filtered.concat(add);
          
          //   for (let f = 0; f <= ra[index.length].answer.length; f++) {
          //     document.getElementById("sarl"[f]).disabled = true;
          //   }
          localStorage.removeItem("points");
          clearTimeout(counter);
          localStorage.setItem("points", JSON.stringify(lcs));
          setTimeout(function () {
            location.reload();
          }, 1000);
        },
        { once: true }
      );
    } else {
      btn.addEventListener(
        "click",
        function () {
          btn.classList = "wrong";
          let add = [0];
          let lcs = filtered.concat(add);
          //   for (let f = 0; f < ra[index.length].answer.length; f++) {
          //     document.getElementById("sarl"[f]).disabled = true;
          //   }
          localStorage.removeItem("points");
          clearTimeout(counter);
          localStorage.setItem("points", JSON.stringify(lcs));

          setTimeout(function () {
            location.reload();
          }, 1000);
        },
        { once: true }
      );
    }
  }
}



if (filtered.length !== 5) {
    var count = 0;
    var ms = 300;
    var step = 5;
    var counter = setTimeout(timer, ms);

    function timer() {
      count = count + 1;
      if (count <= 30) {
        //Do code for showing the number of seconds here
        document.getElementById("bar").value = count; // watch for spelling
        ms = ms - step;
        counter = setTimeout(timer, ms);
        if (count == 30) {
          let add = [0];
          let lcs = filtered.concat(add);
          //   for (let f = 0; f < ra[index.length].answer.length; f++) {
          //     document.getElementById("sarl"[f]).disabled = true;
          //   }
          localStorage.removeItem("points");
          clearTimeout(counter);
          localStorage.setItem("points", JSON.stringify(lcs));
          setTimeout(function () {
            location.reload();
          }, 100);
        }
      }
    }
}
