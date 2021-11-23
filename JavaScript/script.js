


init()

async function init(){
  
  const res = await fetch("../assets/data.JSON")
  const data = await res.json()
  const AllData = data.data
  console.log(AllData);
  var GameData = [];
if (localStorage.getItem("questions") == null) {
  // const generate = (n) => {
  //   for (i = 0; i < 2; i++) {
  //     var random = Math.floor(Math.random() * AllData.length);
  //     var picked = AllData[random];
  //     if (GameData.includes(picked) || AllData[random].level !== n) {
  //       i--;
  //     } else {
  //       GameData.push(picked);
  //     }
  //   }
  // };
  function generate(n) {
    for (j = 0; j < 2; j++) {
      var random = Math.floor(Math.random() * AllData.length);
      var picked = AllData[random];
      if (GameData.includes(picked) || AllData[random].level !== n) {
        j--;
      } else {
        GameData.push(picked);
      }
    }
  }
  for (i = 1; i <= 3; i++) {
    generate(i);
  }

  console.log(GameData);
  // for (i = 0; i < 2; i++) {
  //   var random = Math.floor(Math.random() * AllData.length);
  //   var picked = AllData[random];
  //   if (GameData.includes(picked) || AllData[random].level !== 1) {
  //     i--;
  //   } else {
  //     GameData.push(picked);
  //   }
  // }
  // for (i = 0; i < 2; i++) {
  //   var random = Math.floor(Math.random() * AllData.length);
  //   var picked = AllData[random];
  //   if (GameData.includes(picked) || AllData[random].level !== 2) {
  //     i--;
  //   } else {
  //     GameData.push(picked);
  //   }
  // }
  // for (i = 0; i < 2; i++) {
  //   var random = Math.floor(Math.random() * AllData.length);
  //   var picked = AllData[random];
  //   if (GameData.includes(picked) || AllData[random].level !== 3) {
  //     i--;
  //   } else {
  //     GameData.push(picked);
  //   }
  // }

  localStorage.setItem("questions", JSON.stringify(GameData));

  // var score = localStorage.getItem("isval");

  // var isval = []
  // isval.push(score);
  // function Quizz(){
}

let ra = JSON.parse(localStorage.getItem("questions"));

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
let isval = [];

let added = JSON.parse(localStorage.getItem("points"));
let currentscore = JSON.parse(localStorage.getItem("score"));

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
  score.innerHTML = "0";
} else {
  score.innerHTML = currentscore;
}

if (filtered.length === 6) {
  //should add the name
  let wl = JSON.parse(localStorage.getItem("logged"));
  let id = wl.id
  let ntries = wl.tries + 1;
  let nbanned = wl.banned;
  let nickname = wl.nickname
  let password = wl.password
  
  let score = JSON.parse(localStorage.getItem("score"));

  let percentage = (100 * score) / 340;

  if (percentage > 69.999){
    let scores = [
    {
      name: nickname,
      score: percentage,
    },
  ];
  
  let ohighscores = JSON.parse(localStorage.getItem("highscores"));
  if(localStorage.getItem("highscores") == null){
    localStorage.setItem("highscores", JSON.stringify(scores));
  }else{
    let finalhs = ohighscores.push(scores);
    localStorage.removeItem("highscores");
    localStorage.setItem("highscores", JSON.stringify(finalhs));
  }
  

  //update and ban user
  let remove = JSON.parse(localStorage.getItem("users"));
  const filteredusers = remove.filter((item) => item.id !== id);
  let newuser = {
    id: id,
    nickname: nickname,
    password: password,
    tries: ntries,
    rate: percentage,
    banned: true,
    success: true,
  };


  localStorage.removeItem("users");
  filteredusers.push(newuser);
  localStorage.setItem("users", JSON.stringify(filteredusers));
  let userss = JSON.parse(localStorage.getItem("users"));
  localStorage.removeItem("logged");
  for (var i = 0; i < userss.length; i++) {
        if (id == userss[i].id) {
            let logged = userss[i];
            localStorage.setItem("logged", JSON.stringify(logged));
            window.location.href = "index.html";
          }
        }

  
        
  }else{
    if (ntries > 3) {
      let remove = JSON.parse(localStorage.getItem("users"));
      const filteredusers = remove.filter((item) => item.id !== id);
      let newuser = {
        id: id,
        nickname: nickname,
        password: password,
        tries: ntries,
        rate: percentage,
        banned: true,
        success: false,
      };

      localStorage.removeItem("users");
      filteredusers.push(newuser);
      localStorage.setItem("users", JSON.stringify(filteredusers));

      let userss = JSON.parse(localStorage.getItem("users"));
      localStorage.removeItem("logged");
      for (var i = 0; i < userss.length; i++) {
        if (id == userss[i].id) {
          let logged = userss[i];
          localStorage.setItem("logged", JSON.stringify(logged));
          
        }
      }
    }else{
      let remove = JSON.parse(localStorage.getItem("users"));
      const filteredusers = remove.filter((item) => item.id !== id);
      let newuser = {
        id: id,
        nickname: nickname,
        password: password,
        tries: ntries,
        rate: percentage,
        banned: false,
        success: false,
      };

      localStorage.removeItem("users");
      filteredusers.push(newuser);
      localStorage.setItem("users", JSON.stringify(filteredusers));

      let userss = JSON.parse(localStorage.getItem("users"));
      localStorage.removeItem("logged");
      for (var i = 0; i < userss.length; i++) {
        if (id == userss[i].id) {
          let logged = userss[i];
          localStorage.setItem("logged", JSON.stringify(logged));
          
        }
      }
    }
  }
  localStorage.removeItem("points");
  localStorage.removeItem("questions");
  localStorage.removeItem("score");
  window.location.href = "index.html";
  
  

  //should count percentage out of score localstorage
  //validate if user should be banned
}else{
  if (ra[filtered.length].type == 0) {
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
              finalpoints = points;
            } else {
              finalpoints = points + savedpoints;
            }
            console.log(finalpoints);

            localStorage.removeItem("score");
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
  }else{
    let question = document.getElementById("question");
    question.innerHTML = ra[filtered.length].question;
    let test = document.getElementById("answer");
    let inpt = document.createElement("input");
    let btn = document.createElement("button");
    btn.innerHTML = ra[filtered.length].answer[i];
    btn.classList = "bot";
    btn.innerHTML = "submit"
    test.appendChild(inpt);
    inpt.setAttribute("id", "answerid");
    test.appendChild(btn);
    btn.addEventListener(
      "click",
      function () {
        if (ra[filtered.length].answer[0] == document.getElementById('answerid').value.toUpperCase() ) {
          btn.classList = "botcor";
          let points = ra[filtered.length].points;
          let savedpoints = JSON.parse(localStorage.getItem("score"));
          let finalpoints;
          if (savedpoints == null) {
            finalpoints = points;
          } else {
            finalpoints = points + savedpoints;
          }
          console.log(finalpoints);

          localStorage.removeItem("score");
          localStorage.setItem("score", JSON.stringify(finalpoints));
          let add = [1];
          let lcs = filtered.concat(add);

          //   for (let f = 0; f <= ra[index.length].answer.length; f++) {
          //     document.getElementById("sarl"[f]).disabled = true;
          //   }
          localStorage.removeItem("points");
          clearTimeout(counter);
          localStorage.setItem("points", JSON.stringify(lcs));
        }else{
          btn.classList = "botwro";
          let add = [0];
          let lcs = filtered.concat(add);
          //   for (let f = 0; f < ra[index.length].answer.length; f++) {
          //     document.getElementById("sarl"[f]).disabled = true;
          //   }
          localStorage.removeItem("points");
          clearTimeout(counter);
          localStorage.setItem("points", JSON.stringify(lcs));
        }
        // btn.classList = "wrong";
        // let add = [0];
        // let lcs = filtered.concat(add);
        // //   for (let f = 0; f < ra[index.length].answer.length; f++) {
        // //     document.getElementById("sarl"[f]).disabled = true;
        // //   }
        // localStorage.removeItem("points");
        // clearTimeout(counter);
        // localStorage.setItem("points", JSON.stringify(lcs));

        setTimeout(function () {
          location.reload();
        }
        , 1000);
      },
      { once: true }
    );
    // document.getElementById('answerid').value
    
  }
  
}

if (filtered.length !== 6) {
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
}