class Person {
  constructor(nickname, password){
    
    this.nickname = nickname

    this.password = password
  }

  generateId(){
    return (new Date().getTime()).toString(36) + new Date().getUTCMilliseconds()
  }

  getNickname(){
    return this.nickname
  }

  getpassword(){
    return this.password
  }

}

class Student extends Person {
  constructor(nickname, password, banned){
    super(nickname, password)
    this.banned = banned
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
  constructor(nickname, password, speciality, experience ){
    super(nickname, password)
    this.speciality = speciality
    this.experience = experience 
  }
  addFormateur(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nickname: this.nickname,
      password: this.password,
      speciality: this.speciality,
      experience: this.experience,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/formateurs", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  showFormateur(){
    let table_body = document.getElementById("table_body");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:3000/formateurs", requestOptions)
      .then((response) => response.json())
      .then((element) => {
        for (let i = 0; i < element.length; i++) {
          table_body.insertAdjacentHTML(
            "beforeend",
            `<tr>
            <td>${element[i].nickname}</td>
            <td>${element[i].experience}</td>
            <td>${element[i].speciality}</td>
          </tr>`
          );
        }
      })
      .catch((error) => console.log("error", error));
  }

  updateFormateur(){
    console.log("Formateur updated!")
  }

  deleteFormateur(){
    console.log("Formateur deleted!")
  }

}


function adding() {
  let name = document.querySelector("#name").value;
  let password = document.querySelector("#password").value;
  let exp = document.querySelector("#exp").value;
  let speciality = document.querySelector("#speciality").value;
  return new Formateur(name, password, speciality, exp).addFormateur();
}

(() => {
  let myclass = new Formateur();
  return myclass.showFormateur();
})();

