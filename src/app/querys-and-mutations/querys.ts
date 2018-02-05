const autoLogin = (token: string) => `{
  user(token: "${token}") {
    profile {
      token
      username
    }
  }
}`;

const login = (email: string, password: string) => `{
  user(email: "${email}", password: "${password}") {
    profile {
      token
      username
    }
  }
}`;

export default { autoLogin, login };