
class Person {
  constructor(nickname, id, password){
    
    this.nickname = nickname
    this.id = id
    this.password = password
  }

  generateId(){
    return (new Date().getTime()).toString(36) + new Date().getUTCMilliseconds()
  }

  getNickname(){
    return this.nickname
  }

  getPassword(){
    return this.password
  }

}

class Student extends Person {
  constructor(id, nickname, password, banned, role ){
    super(id, nickname, password)
    this.banned = banned
    this.role = role 
  }
  addStudent(){
    console.log("I am a New Student!")
  }

  showStudent(){
    console.log("Student!")
  }

  updateStudent(){
    console.log("Student updated!")
  }

  deleteStudent(){
    console.log("Student deleted!")
  }

}
class Formateur extends Person {
  constructor(id, nickname, password, banned, role ){
    super(id, nickname, password)
    this.banned = banned
    this.role = role 
  }
  addFormateur(){
    console.log("I am a New Formateur !")
  }

  showFormateur(){
    console.log("Formateur!")
  }

  updateFormateur(){
    console.log("Formateur updated!")
  }

  deleteFormateur(){
    console.log("Formateur deleted!")
  }

}

