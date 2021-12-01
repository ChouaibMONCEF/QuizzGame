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

  addQuestion() {
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "id": this.id,
      "question": this.question,
      "subjectid": this.subjectid,
      "probableanswersid": this.probableanswerid,
      "correctid": this.correctid,
      "points": this.points,
      "level": this.levelid
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://localhost:3000/question", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log("question added")
  }

  correctAnswer() {
    console.log("The correct answer");
  }

  answerByQuestion() {
    console.log("All answers probable!");
  }
}
