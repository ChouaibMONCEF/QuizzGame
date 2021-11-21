const register = () => {
  const nickname = document.getElementById("nickname").value.toUpperCase();
  const password = document.getElementById("password").value;
  if (
    password == null ||
    password == "" ||
    nickname == null ||
    nickname == ""
  ) {
    const required = document.getElementById("Required");
    required.innerHTML = "Fill all fields";
  } else {
    if (localStorage.getItem("users") == null) {
      let users = [
        {
          id: 1,
          nickname: nickname,
          password: password,
          tries: 0,
          rate: 0,
          banned: false
        },
      ];
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      //check if nickname already exists
      let userss = JSON.parse(localStorage.getItem("users"));

      function userExists(name) {
        return userss.some(function (el) {
          return el.nickname === nickname;
        });
      }
      //then push it in as an object
      if (userExists(nickname) === true) {
        document.getElementById("Required").innerHTML =
          "Nickname not available";
      } else {
        let newuser = {
          id: userss.length + 1,
          nickname: nickname,
          password: password,
          tries: 0,
          rate: 0,
          banned: false,
        };
        localStorage.removeItem("users");
        userss.push(newuser);
        localStorage.setItem("users", JSON.stringify(userss));
        window.location.href = "login.html";
      }
    }
  }
};

const login = () => {
  const nickname = document.getElementById("nickname").value.toUpperCase();
  const password = document.getElementById("password").value;
  if (
    password == null ||
    password == "" ||
    nickname == null ||
    nickname == ""
  ) {
    document.getElementById("Required").innerHTML = "Fill all fields";
  } else {
    if (localStorage.getItem("users") == null) {
      document.getElementById("Required").innerHTML = "create account first";
    } else {
      //validate the authentication
      let userss = JSON.parse(localStorage.getItem("users"));

      for (var i = 0; i < userss.length; i++) {
        if (nickname == userss[i].nickname) {
          if (password == userss[i].password) {
            let logged = userss[i];
            localStorage.setItem("logged", JSON.stringify(logged));
            window.location.href = "index.html";
          } else {
            document.getElementById("Required").innerHTML =
              "wrong password";
          }
        }
      }
    }
  }
};

const goregister = () => {
  window.location.href = "register.html";
};

const gologin = () => {
  window.location.href = "login.html";
};
