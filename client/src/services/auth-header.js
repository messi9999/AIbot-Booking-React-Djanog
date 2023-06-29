export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.tokens.access) {
    return { Authorization: "Bearer " + user.tokens.access };
  } else {
    return {};
  }
}
