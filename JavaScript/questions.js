class Answers {
  constructor(answer, all) {
    this.answer = answer;
    this.all = all;
  }

  async getall() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await fetch("http://localhost:3000/answer", requestOptions);
    const result = res.json();
    let amtd = new Answers(this.answer, result);
    return amtd.check();
    // .then((response) => response.json())
    // .then((result) => {
    //   let amtd = new Answers(this.answer, result)
    //   return amtd.check()
    // })
    // .catch((error) => console.log("error", error));
  }

  begin() {
    let ans = this.answer;
    let mtd = new Answers(ans);
    return mtd.getall();
  }

  async check() {
    //check if answer already exists
    let answersa = await this.all;
    for (let i = 0; i < answersa.length; i++) {
      if (this.answer == answersa[i].answer) {
        var check = 1;
        var id = i + 1;
      }
    }
    // console.log(check);
    // return;

    if (check == 1) {
      return id;
    } else {
      let final = new Answers(this.answer);
      final.addanswer();
      return answersa.length
    }
    //if exists get its id
    //if not exists add it and get its id
  }

  addanswer() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      answer: this.answer,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/answer", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
}

// (async () => {
//   let ans = "18";
//   let ert = new Answers(ans);
//   let id = await ert.begin();
//   console.log(id);
// })();

class Question {
  constructor(
    question,
    subjectid,
    probableanswerid,
    correctid,
    points,
    levelid,
    id
  ) {
    this.question = question;
    this.subjectid = subjectid;
    this.probableanswerid = probableanswerid;
    this.correctid = correctid;
    this.points = points;
    this.levelid = levelid;
    this.id = id;
  }

  async addQuestion() {
    let pan = this.probableanswerid;
    var arra = [];
    await (async () => {
      for (let i = 0; i < pan.length; i++) {
        let ans = pan[i];
        let ert = new Answers(ans);
        arra.push(await ert.begin())
      }
    })();
    let can = this.correctid;
    var crct = [];
    await (async () => {
        let sns = can;
        let srt = new Answers(sns);
        crct.push(await srt.begin())
    })();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      id: this.id,
      question: this.question,
      subjectid: this.subjectid,
      probableanswersid: arra,
      correctid: crct,
      points: this.points,
      level: this.levelid,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:3000/question", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log("question added");
  }

  correctAnswer() {
    console.log("The correct answer");
  }

  answerByQuestion() {
    console.log("All answers probable!");
  }
}
