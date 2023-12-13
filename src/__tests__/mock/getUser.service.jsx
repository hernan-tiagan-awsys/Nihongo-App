const TODOS_KEY = "user";

export const getUser = () =>
  JSON.parse(localStorage.getItem(TODOS_KEY) || "[]");

export const setUser = (user) => {
  const users = getUser();

  users.push(user);

  localStorage.setItem(TODOS_KEY, JSON.stringify(users));
};
