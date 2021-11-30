class Question {
  constructor(
    id,
    question, 
    subjectid, 
    probableanswerid,
    correctid,
    points,
    levelid,
  ){
    this.id = id
    this.question = question
    this.subjectid = subjectid
    this.probableanswerid = probableanswerid
    this.correctid = correctid
    this.points = points 
    this.levelid = levelid
  }
  
  addQuestion(){
    console.log('Question added!')
  }

  correctAnswer(){
    console.log('The correct answer')
  }

  answerByQuestion(){
    console.log('All answers probable!')
  }
}