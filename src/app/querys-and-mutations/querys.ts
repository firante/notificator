export const autoLogin = (token: string) => `{
  autoLogin(token: "${token}") {
    profile {
      token
      username
    }
  }
}`;

export const login = (email: string, password: string) => `{
  login(email: "${email}", password: "${password}") {
    profile {
      token
      username
    }
  }
}`;

export const getUserName = (username: string) => `{
  user(username: "${username}") {
    profile {
      username
    }
  }
}`;

export const isUsernameOrEmailExist = (data:any = {}) => `{
  isUsernameOrEmailExist(username: "${data.username}", email: "${data.email}") {
    profile {
      username,
      email
    }
  }
}`;

