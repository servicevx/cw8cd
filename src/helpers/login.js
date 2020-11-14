export const onLogin = (name, password) => {
  // e.preventDefault();
  localStorage.setItem("userName", name);
  localStorage.setItem("password", password);
};

export const checkIsLogin = () => {
  const userName = localStorage.getItem("userName");
  const password = localStorage.getItem("password");
  return userName && password;
};

export const getUser = () => {
  return localStorage.getItem("userName");
}
