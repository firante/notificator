exports.createUser = (username, email, password) => `mutation {
      createUser (username: "${username}", email: "${email}", password: "${password}") {
        status
	profile {
	  token
	  username
	}
      }
    }`;
