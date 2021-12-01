class Test {
  constructor(
    subjectid,
    n1questions,
    n2questions,
    n3questions,
    dateopen,
    dateclose
  ) {
    this.subjectid = subjectid;
    this.n1questions = n1questions;
    this.n2questions = n2questions;
    this.n3questions = n3questions;
    this.dateopen = dateopen;
    this.dateclose = dateclose;
  }

  addtest() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      subjectid: this.subjectid,
      n1questions: this.n1questions,
      n2questions: this.n2questions,
      n3questions: this.n3questions,
      dateopen: this.dateopen,
      dateclose: this.dateclose,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/test", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  deletetest() {
    console.log("test deleted");
  }

  gettests(){
    let table_body = document.getElementById('table_body')

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/test", requestOptions)
      .then((response) => response.json())
      .then((element) => 
      {
        for (let i = 0; i < element.length; i++) {
          if (element[i].subjectid == 1) {
            var sbjct = "MATH";
          } else if (element[i].subjectid == 2) {
            var sbjct = "Physics";
          } else if (element[i].subjectid == 3) {
            var sbjct = "Svt";
          }
          table_body.insertAdjacentHTML(
            "beforeend",
            `<tr>
            <td>${element[i].id}</td>
            <td>${sbjct}</td>
            <td>${element[i].n1questions}</td>
            <td>${element[i].n2questions}</td>
            <td>${element[i].n3questions}</td>
            <td>${element[i].dateopen}</td>
            <td>${element[i].dateclose}</td>
          </tr>`
          );
        }
        // if (element[1].subjectid == 1) {
        //   console.log("Math");
        // } else if (element[1].subjectid == 2) {
        //   var sbjct = "Physics"
        // } else if (element[1].subjectid == 3) {
        //   console.log("SVT");
        // }
        //   table_body.insertAdjacentHTML(
        //     "beforeend",
        //     `<tr>
        //     <td>${element[1].id}</td>
        //     <td>${sbjct}</td>
        //     <td>${element[1].n1questions}</td>
        //     <td>${element[1].n2questions}</td>
        //     <td>${element[1].n3questions}</td>
        //     <td>${element[1].dateopen}</td>
        //     <td>${element[1].dateclose}</td>
        //   </tr>`
        //   )
      })
      .catch((error) => console.log("error", error));
  }
}

function adding() {
  let subjectid = document.querySelector("#subjectid").value
  let n1 = document.querySelector("#n1").value
  let n2 = document.querySelector("#n2").value
  let n3 = document.querySelector("#n3").value
  let dateopen = document.querySelector("#dateopen").value
  let dateclose = document.querySelector("#dateclose").value
  return new Test(subjectid, n1, n2, n3, dateopen, dateclose).addtest()
}


(() => {
  let myclass = new Test()
  return myclass.gettests();
})()









