const logout = () => {
  localStorage.removeItem("logged");
  window.location.href = "login.html";
};
