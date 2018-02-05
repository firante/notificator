const createUser = (username: string, email: string, password: string) => `mutation {
  createUser (username: "${username}", email: "${email}", password: "${password}") {
    status
    profile {
      token
      username
    }
  }
}`;


export default { createUser };